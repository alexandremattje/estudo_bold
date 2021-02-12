INSERT INTO users (user_id, active, email, last_name, "name", "password", user_name) VALUES(1, false, 'city@lego.com', 'City', 'Lego', '', 'lego.city');
INSERT INTO user_role (user_id, role_id) VALUES (1, 1);

INSERT INTO users (user_id, active, email, last_name, "name", "password", user_name) VALUES(2, true, 'action.city@cobi.com', 'Action City', 'Cobi', '', 'cobi.action.city');
INSERT INTO user_role (user_id, role_id) VALUES (2, 2);