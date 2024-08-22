interface User {
    username: String
    password: String
    email: String
    emails: Email[]
}

interface Email {
    recipient: String
    subject: String
    body: String
    sentAt: Date
    user: User
}

interface Stats{
    date: Date
    emailsSent: Number
}