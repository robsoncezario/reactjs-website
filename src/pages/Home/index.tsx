import React from 'react';
import YouTube from 'react-youtube';
import { 
  Box, 
  Typography,
  Link,
  RootRef,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as fiveM from '../../fivem/utils';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100vw',
    height: 'auto',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    paddingTop: '12.5vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingBottom: '12.5vh'
  },

  paper: {
    width: '100vw',
    height: 'auto',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    paddingTop: '12.5vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingBottom: '12.5vh'
  },

  aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },

  title: {
    textAlign: 'center',
    marginBottom: '2vh'
  },

  paragraph: {
    marginTop: '1vh',
    textAlign: 'center'
  },

  list: {
    marginLeft: '1vw'
  }
}));

const Home = (props: any) => {
  const styles = useStyles();
  const isTabletOrMobile = !useMediaQuery('(max-width: 1224px)');

  return (
    <>
      <RootRef rootRef={props.homeEl}>
        <Box className={styles.container}>
          <div className={styles.aligner}>
            <div className={'paragraph'}>
              <Typography 
                  variant='h1' 
                  component='div'
                  className={styles.title}>
                    O Rio de Janeiro no GTA V
              </Typography>

              <Typography 
                  variant='body2' 
                  component='div'
                  className={styles.paragraph}>
                    Conheça um mundo que é alterado pelas atitudes dos jogadores. Não perca a oportunidade e Molde o futuro do GTA V através de suas próprias mãos. 
              </Typography>        

              <Typography 
                  variant='body2' 
                  component='div'
                  className={styles.paragraph}>
                    No GTA Rio você vai criar seu personagem e você deve interpretá-lo, criando sua história de vida e explorando diversas possibilidades, mas você deve considerar que todas as ações tem suas devidas consequências.
              </Typography>     

              <Typography 
                  variant='body2' 
                  component='div'
                  className={styles.paragraph}>
                    Tenha liberdade para ser o que você quiser: policial, gangster, mafioso, mecânico, samu e muitos outros papéis onde sua criatividade é o limite. Nossa comunidade é muito ativa no discord e vamos te ajudar em tudo que for possível.
              </Typography>         
            </div>

            <img className={'girl'}
                 src={'https://live.staticflickr.com/65535/49938440971_15c34279f4_o.png'} />
          </div>
        </Box>
      </RootRef>

      <Box className={styles.paper}>
        <div className={styles.aligner}>
          <img className={'figure'}
               src={'https://live.staticflickr.com/65535/49938440826_a06f099b2b_o.png'} />

          <div className={'paragraph'}>
            <Typography 
                variant='h1' 
                component='div'
                className={styles.title}>
                  O mais avançado servidor do FiveM
            </Typography>

            <Typography 
                variant='body2' 
                component='div'
                className={styles.paragraph}>
                  Como grandes fãs pelo GTA V, buscamos trazer algo autentico para o universo roleplay. Orgulhosamente, contamos com nossa base própria. Esperamos que você se maravilhe com as características únicas de nossos servidores.
            </Typography>        

            <Typography 
                variant='body2' 
                component='div'
                className={styles.paragraph}>
                  Nossa paixão pelo FiveM nos faz manter o desenvolvimento ativo. Novidades e atualizações são entregues com frequência, isso sem se preocupar com baixar nada. Graças ao FiveM, basta entrar no servidor para estar atualizado.
            </Typography>           
          </div>
        </div>
      </Box>

      <RootRef rootRef={props.howToPlayEl}>
        <Box className={styles.container}>
          <div className={styles.aligner}>
            <div className={'paragraph'}>
              <Typography 
                  variant='h1' 
                  component='div'
                  className={styles.title}>
                    Como jogar 
              </Typography>

              <Typography 
                  variant='body2' 
                  component='div'>
                    É muito simples, são apenas três passos: <br/><br/>
              </Typography> 

              <Typography 
                  variant='body2' 
                  component='div'
                  className={styles.list}>
                    1. Tenha uma cópia do GTA V.
              </Typography>    

              <Typography 
                  variant='body2' 
                  component='div'
                  className={styles.list}>
                    2. Faça o download do  

                    &nbsp;<Link href="https://fivem.net/"
                                target="_blank">
                    FiveM
                    </Link>.
              </Typography>      

              <Typography 
                  variant='body2' 
                  component='div'
                  className={styles.list}>
                    3. Clique &nbsp;

                    <Link href={fiveM.getLaunchUrl}>
                      AQUI
                    </Link>&nbsp;

                    para se conectar ao GTA Rio.
              </Typography>        

              <Typography 
                  variant='body2' 
                  component='div'>
                  <br/>Para conexão direta, nosso IP do servidor é <Link>
                      {fiveM.getServerIP}
                    </Link>.
              </Typography> 
            </div>

            <img className={'figure'}
                src={'https://live.staticflickr.com/65535/49937927803_c8dee32e35_o.png'} />
          </div>
        </Box>
      </RootRef>

      <Box className={styles.paper}>
        <div className={styles.aligner}>
          <img className={'girl'}
                src={'https://live.staticflickr.com/65535/49938440956_ece7e23d24_o.png'} />

          <YouTube videoId='zBEFA-3LVd0' opts={{
            height: isTabletOrMobile ? '390' : '190',
            width: isTabletOrMobile ? '640' : '320',
            playerVars: {
              autoplay: 0,
              controls: 0
            },
          }} className={'youtube'}/>
        </div>
      </Box>
    </>
  );
}

export default Home;