db.createUser(
    {
        user: "sock-user",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "users"
            }
        ]
    }
);