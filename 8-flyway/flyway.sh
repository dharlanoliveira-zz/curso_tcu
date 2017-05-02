docker pull dhoer/flyway
docker run --rm -v $(pwd)/scripts:/flyway/sql --link mariadb:mariadb dhoer/flyway -url=jdbc:mysql://mariadb -schemas=flyway_teste -user=root -password=teste migrate
