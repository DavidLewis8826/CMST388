<?php 
  $file = fopen("list.csv", "r"); 
  while (!feof($file)) { 
    $row = fgetcsv($file); 
    if ($row) { 
      echo "<tr>"; 
      echo "<td>" . $row[0] . "</td>"; 
      echo "<td>" . $row[1] . "</td>"; 
      echo "<td>" . $row[2] . "</td>"; 
      echo "<td>" . $row[3] . "</td>";
      echo "<td>" . $row[4] . "</td>";
      echo "<td>" . $row[5] . "</td>";
      echo "</tr>"; 
      } 
  } 
  fclose($file); 
  ?> 

