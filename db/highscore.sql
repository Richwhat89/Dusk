Select display_name, total_points From users
INNER JOIN endings on users.id = endings.user_id;

