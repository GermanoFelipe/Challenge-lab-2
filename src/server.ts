import express from 'express';
import { AuthController } from './controllers/authController';
import { EmailController } from './controllers/emailController';
import { authenticateJWT } from './middlewares/authMiddleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const authController = new AuthController();
const emailController = new EmailController();

app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/send', authenticateJWT, emailController.sendEmail);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});