UPDATE users
SET 
username = $2,
password = $3,
display_name = $4,
email = $5
WHERE id = $1;
SELECT * FROM users
WHERE id = $1;
