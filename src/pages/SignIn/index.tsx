import './styles.scss';
import { GoogleLogo } from 'phosphor-react';

export function SignIn() {
    return (
        <div className="container">
            <h1>Acesse sua conta</h1>

            <span>
                Utilizando autenticação social, por exemplo, autenticação com a Google <br />
                você facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
            </span>

            <button
                type="button"
                className="button"
            >
                    <GoogleLogo />
                    Entrar com o Google
            </button>
        </div>
    )
}