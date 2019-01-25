DELETE FROM endings
WHERE user_id = $1;
DELETE FROM users
WHERE id = $1
