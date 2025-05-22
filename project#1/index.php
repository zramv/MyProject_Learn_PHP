<?php function e($value){
    return htmlspecialchars($value,ENT_QUOTES,"UTF-8");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
    <title>Document</title>
</head>
<?php 
$dishes=[
    "Classic Spaghetti Carbonara"=>"Classic Spaghetti Carbonara",
    "Chicken Tikka Masala" => "Chicken Tikka Masala",
    "Pad Thai" => "Pad Thai",
    "Beef Tacos" =>"Beef Tacos",
    "Moussaka" => "Moussaka"
];
$dish='';
if(isset($_GET['dish'])&&array_key_exists($_GET['dish'],$dishes)){
$dish = $_GET['dish'];}
?>


<body>
    <div>
    <form action="index.php" method="GET" style="padding-top:20px;">
        <label for="dish">What you want to eat:</label>
        
        <select id="dish" name="dish" style="width: 300px;">
            <option value="Classic Spaghetti Carbonara" <?php if($dish=="Classic Spaghetti Carbonara") echo "selected";?>>Classic Spaghetti Carbonara</option>
            <option value="Chicken Tikka Masala" <?php if($dish=="Chicken Tikka Masala") echo "selected";?>>Chicken Tikka Masala</option>
            <option value="Pad Thai" <?php if($dish=="Pad Thai") echo "selected";?>>Pad Thai</option>
            <option value="Beef Tacos" <?php if($dish=="Beef Tacos") echo "selected";?>>Beef Tacos</option>
            <option value="Moussaka" <?php if($dish=="Moussaka") echo "selected";?>>Moussaka</option>
        </select>
        <input type="submit" />
    </form>
    </div>
    <?php if(!empty($dish)):?>
    <h1><?php echo $dish;?></h1>
    <img src="images/<?php echo $dish; ?>-image.jpg" />
    <?php echo file_get_contents("dishes/{$dish}.html");?>
    <?php endif; ?>
</body>
</html>