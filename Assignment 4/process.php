<?php
// Database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert Student Details
if (isset($_POST['submit'])) {
    // Retrieve form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $rollNo = $_POST['rollNo'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];
    $contactNumber = $_POST['contactNumber'];

    // Perform validation and insertion into the database
    // Your SQL query here to insert data into the database
}

// Delete Student Record
if (isset($_GET['delete'])) {
    $rollNoToDelete = $_GET['delete'];

    // Your SQL query here to delete data based on Roll No/ID
}

// Update Student Details
if (isset($_POST['update'])) {
    // Retrieve updated data from the form
    // Your SQL query here to update data based on Roll No/ID
}

// Fetch and Display Student Records
$sql = "SELECT * FROM students";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Display records in a tabular format
    echo "<table border='1'>";
    // Add table headers

    while ($row = $result->fetch_assoc()) {
        // Add table rows with student data
    }

    echo "</table>";
} else {
    echo "No records found";
}

$conn->close();
?>
