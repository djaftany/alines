import transporter from "../../main/transporter"

const send = async (email) => {

    await transporter.sendMail({
        to: email.address,
        html: email.html
    })
}

const emails = {
    signup: ({ token, code, name, email }) => {
        return {
            address: email,
            html: `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lirix</title>
</head>

<body style="text-align: center;  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
    <h1 style="padding: 4rem;">
    <a href=""><img width="50rem" src="data:image/png;base64, 
    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"></a>
    </h1>
    <h2 style="color: rgb(97, 0, 187); padding: 2rem;">Olá</h2>

    <div style="max-width: 500px; margin: auto;">
        <p style="text-align: justify; font-weight: 500; color: rgb(77, 77, 77);">
            <strong>${name}</strong>. Parabéns, finalizou
            com sucesso a primeria etapa para a criação da sua conta.
        </p>
        <p style="text-align: justify; font-weight: 500; color: rgb(77, 77, 77);">
            Prezamos a sua segurança, por isso precisamos que confirme que este endereço de email
            é seu para podermos avançar com o pedido de criação da sua conta com o código:
        </p>
        <span
            style="display: block; width: 100%; height: 2rem; line-height: 2rem; background-color: rgb(97, 0, 187); color: white; margin: 1rem 0;">${code}</span>
        <p style="text-align: center; font-weight: 500; padding: 1rem; margin: 4rem 0 4rem 0; color: rgb(77, 77, 77);">
            Para confirmar, clique no botão abaixo
        </p>
        <a style="text-decoration: none; background-color: rgb(97, 0, 187); padding: .5rem 1rem; border-radius: .3rem; color: white;"
            href="${process.env.NEXT_PUBLIC_HOST}/confirm?token=${token}&email=${email}&mode=signup">Confirmar</a>
        <p style="text-align: justify; font-weight: 500; margin-top: 6rem; color: rgb(77, 77, 77);">
            Ótimo dia! Equipe do Lirix.
        </p>
    </div>
</body>

</html>   `
        }
    },

    signin: ({ token, code, name, email }) => {
        return {
            address: email,
            html: { token, code, name }
        }
    }
}

export {
    send,
    emails
}