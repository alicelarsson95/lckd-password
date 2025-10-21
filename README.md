## ATT GÖRA:
- Skapa github actions för dev och prod
- Skapa dockerfile
- Jobba med Git flow- skapa en branch för varje feature vi jobbar med
- Skapa s3 buckets - en för dev och en för main
- skapa docker-compose!

### Frontend:
- login-sida
- view password-sida
- create new lckd-sida
- edit lckd-sida

### Backend:
endpoints:
Authentication:
├── POST   /api/auth/register
└── POST   /api/auth/login

Passwords:
├── GET    /api/passwords
├── POST   /api/passwords
├── PUT    /api/passwords/:id
└── DELETE /api/passwords/:id


#### Funktionalitet
Det ska gå och generera ett lösenord på frontend enligt några regler (som ni bestämmer ex. en stor bokstav, en siffra osv). Här får man använda bibliotek ifall man vill eller göra ett eget hemmabygge.
Det ska gå och skapa ett konto
Det ska gå och logga in
Lösenord ska sparas i en databas.
Man ska kunna hämta sina lösenord och visa dessa i frontend.
Man ska kunna spara ett lösenord med en webbadress samt användarnamn.
Man ska kunna ta bort ett lösenord.
Man ska kunna ta uppdatera ett lösenord.
Använd er av CryptoJS för att kryptera och dekryptera lösenord mellan FE och BE.