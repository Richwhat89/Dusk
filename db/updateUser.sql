UPDATE users
SET username = $1
WHERE username = $2;

UPDATE users
SET password = $1
WHERE password = $2;

UPDATE users
SET display_name = $1
WHERE display_name = $2;

UPDATE users
SET email = $1
WHERE email = $2;