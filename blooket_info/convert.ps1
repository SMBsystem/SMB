# Конвертер: src/*.txt -> kz/NN.csv и ru/NN.csv (импорт в Blooket) + проверки.
# Формат строки вопроса:  Q ;; вопрос KZ ;; вопрос RU ;; верный KZ ;; неверный1 KZ ;; неверный2 KZ ;; неверный3 KZ [;; верный RU ;; неверный1 RU ;; неверный2 RU ;; неверный3 RU]
# Если RU-ответов нет (7 полей), ответы одинаковые в обоих языках. Заголовок набора:  # NN ;; название KZ ;; название RU
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$enc = New-Object Text.UTF8Encoding($true)
$sets = @{}; $order = @(); $cur = $null; $problems = @()
foreach ($f in (Get-ChildItem "$root\src\*.txt" | Sort-Object Name)) {
  $ln = 0
  foreach ($line in [IO.File]::ReadAllLines($f.FullName, [Text.Encoding]::UTF8)) {
    $ln++; $line = $line.Trim()
    if ($line -eq '' -or $line.StartsWith('//')) { continue }
    $p = $line -split ' ;; '
    if ($p[0] -match '^# (\d+)$') { $cur = [int]$Matches[1]; $sets[$cur] = @{ n = $cur; tk = $p[1]; tr = $p[2]; q = @() }; $order += $cur; continue }
    if ($p[0] -eq 'Q') {
      if ($p.Count -ne 7 -and $p.Count -ne 11) { $problems += "$($f.Name):$ln fields=$($p.Count)"; continue }
      $sets[$cur].q += ,$p; continue
    }
    $problems += "$($f.Name):$ln unknown line"
  }
}
function Csv($s) { '"' + ($s -replace '"', '""') + '"' }
$idx = @("# Blooket: информатика (InfoTany)", "", "| № | KZ | RU | Вопросов |", "|---|----|----|----------|")
foreach ($n in ($order | Sort-Object)) {
  $s = $sets[$n]; $cnt = $s.q.Count
  if ($cnt -ne 15) { $problems += "set $n has $cnt questions" }
  foreach ($lang in 'kz', 'ru') {
    $rows = @()
    $rows += (Csv "Blooket`nImport Template") + ',,,,,,,'
    $rows += ((Csv 'Question #'), (Csv 'Question Text'), (Csv 'Answer 1'), (Csv 'Answer 2'), (Csv "Answer 3`n(Optional)"), (Csv "Answer 4`n(Optional)"), (Csv "Time Limit (sec)`n(Max: 300 seconds)"), (Csv "Correct Answer(s)`n(Only include Answer #)")) -join ','
    $rng = New-Object System.Random(($n * 1000) + $(if ($lang -eq 'kz') { 1 } else { 1 }))   # одинаковая позиция верного в KZ и RU
    $qi = 0
    foreach ($p in $s.q) {
      $qi++
      $qt = $(if ($lang -eq 'kz') { $p[1] } else { $p[2] })
      if ($lang -eq 'kz' -or $p.Count -eq 7) { $ans = @($p[3], $p[4], $p[5], $p[6]) } else { $ans = @($p[7], $p[8], $p[9], $p[10]) }
      $pos = $rng.Next(0, 4)
      $list = New-Object System.Collections.ArrayList
      $wrong = @($ans[1], $ans[2], $ans[3]); $w = 0
      for ($k = 0; $k -lt 4; $k++) { if ($k -eq $pos) { [void]$list.Add($ans[0]) } else { [void]$list.Add($wrong[$w]); $w++ } }
      if ($qt.Length -gt 300) { $problems += "set $n q$qi $lang question length $($qt.Length)" }
      foreach ($a in $list) { if ($a.Length -gt 75) { $problems += "set $n q$qi $lang answer length $($a.Length): $a" }; if ($a.Trim() -eq '') { $problems += "set $n q$qi $lang empty answer" } }
      if (($list | Select-Object -Unique).Count -ne 4) { $problems += "set $n q$qi $lang duplicate answers" }
      $tl = $(if ($qt.Length -gt 110) { 30 } else { 20 })
      $rows += ((Csv "$qi"), (Csv $qt), (Csv $list[0]), (Csv $list[1]), (Csv $list[2]), (Csv $list[3]), (Csv "$tl"), (Csv "$($pos + 1)")) -join ','
    }
    [IO.File]::WriteAllText("$root\$lang\$('{0:00}' -f $n).csv", ($rows -join "`r`n") + "`r`n", $enc)
  }
  $idx += "| $('{0:00}' -f $n) | Информатика №$('{0:00}' -f $n). $($s.tk) | Информатика №$('{0:00}' -f $n). $($s.tr) | $cnt |"
}
[IO.File]::WriteAllText("$root\index.md", ($idx -join "`n") + "`n", (New-Object Text.UTF8Encoding($false)))
"sets=$($order.Count)"
if ($problems.Count) { "PROBLEMS:"; $problems } else { "no problems" }