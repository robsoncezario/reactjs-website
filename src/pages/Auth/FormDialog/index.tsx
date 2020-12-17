import React from 'react';
import { useRecoilState } from 'recoil';
import { 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button, 
  makeStyles,
} from '@material-ui/core';
import TextFieldWithValidation from '../../../components/TextFieldWithValidation';
import SubmitButton from '../../../components/SubmitButton';
import Validation from '../Validation/validation';

import * as atoms from './atoms';
import * as query from './queries';

const useStyles = makeStyles(theme => ({
  centerResetPassword: {
    width: '100%',
    display: 'flex',
    ['@media (max-width: 767px)']: { 
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
}));

const FormDialog = (props: any) => {
  const styles = useStyles();
  const [formData, setFormData] = useRecoilState(atoms.loginForm);

  const passwordOnChange = (entry : string) => setFormData({
    ...formData,
    password: entry
  });

  const usernameOrEmailOnChange = (entry : string) => setFormData({
    ...formData,
    username: entry
  });

  const submitLogin = () => {
    setFormData({
      ...formData,
      isAsyncRequesting: true
    });
    
    const body = {
      query: query.signIn,
      operationName: 'SignIn',
      variables: {
        data: {
          username: formData.username,
          password: formData.password
        }
      }
    };

    fetch('http://gtario.net:4000', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }).then(result => result.json())
      .then(result => {
        if(result.data.signIn) {

        } else {
          setFormData({
            ...formData,
            isAsyncRequesting: false
          });
        }
      });
  }

  return (
    <Dialog open={props.toggle} 
            onClose={props.toggleForm} 
            aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Entrar</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Faça o login no GTA Rio para ter acesso ao nosso painel de usuário. Sua informações de login do game são as mesmas usadas aqui. 
        </DialogContentText>

        <TextFieldWithValidation
          autoFocus={true}
          label='Nome de usuário ou e-mail'
          type={'text'}
          helperText={'Você pode fazer o log-in usando o seu endereço de e-mail ou o nome de usuário.'}
          errorText={'Por favor, insira um e-mail ou nome de usuário válido.'}
          validation={Validation.isValidUsernameOrEmail}
          onChange={usernameOrEmailOnChange} />

        <TextFieldWithValidation
          label='Senha'
          type={'password'}
          helperText={'No mínimo 6 digitos, contendo ao menos um de cada, número, minúscula e maíuscula'}
          errorText={'Essa senha não entra em nossos padrões de segurança. Por favor, insira uma senha válida.'}
          validation={Validation.isValidPassword}
          onChange={passwordOnChange} />

        <div className={styles.centerResetPassword}>
          <Button onClick={props.toggleForm} 
                  color='primary'
                  variant='text'>
          Esqueci minha senha
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.toggleForm} 
                color='primary'
                variant='outlined'>
          Não tenho uma conta
        </Button>
        <SubmitButton label='Entrar'
                      selector={atoms.loginSelector}
                      onClick={submitLogin} />
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;