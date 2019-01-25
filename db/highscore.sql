Select * From users
INNER JOIN endings on users.id = endings.user_id
WHERE users.id = $1