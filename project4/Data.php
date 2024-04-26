<!DOCTYPE html>

<html lang="en">
<head>
    <title>Project 3 - Home</title>
    <link rel="stylesheet" href="css.css">
    <meta charset="UTF-8">
    <meta name="description" content="Project 3 home for David Lewis CMST 386 project. Topics include responsive design and targeting your audience">
    <meta name="keywords" content="Project 3, David Lewis, responsive design, targeting audience">
    <meta name="author" content="David Lewis">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>CMST 386 - Project 3</h1>
  <div class="main">
    <div class="flex-container">
      <div>
      <table> 
        <tr> 
          <th>Login</th> 
          <th>First Name</th> 
          <th>Last Name</th> 
          <th>Path</th>
          <th>Training Start Date</th>
          <th>Has Reached 80 Hours?</th>
          </tr> 
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
      </table> 
      </div>
    </div>
    </div>
    <div class="footer">
        <p>Author: David Lewis</p>
    </div>
</body>
</html>
