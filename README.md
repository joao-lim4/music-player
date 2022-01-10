<p align="center">
  <a href="https://github.com/joao-lim4">
    <img src="src/content/assets/logo.png" alt="Logo" width="170" height="110">
  </a>

  <h3 align="center">React-Native Music App</h3>

  <p align="center">
    console.log('☕☕');
    <br />
    <a href="https://github.com/joao-lim4/music-player"><strong> << View Doc >></strong></a>
  </p>
</p>


## Sobre
Esse foi um app desenvolvido para reproduzir algumas faixas com o intuito de mostrar o uso do react-native e da lib react-native-track-player.
Inicialmente só tem suporte para Android.


* [React-native](https://reactnative.dev/)
* [React-Native-Track-Player](https://react-native-track-player.js.org/documentation/)


<img src="https://www.linkpicture.com/q/WhatsApp-Image-2022-01-10-at-09.52.52.jpeg" alt="Logo" width="300" height="600" >

### Installation

1. Clone o repo
   ```sh
   git clone https://github.com/joao-lim4/music-player
   ```
2. Entre no diretório
    ```sh
        cd music-player
    ```
3. Install NPM packages
   ```sh
    npm install
   ```

## Configuração da lib Neu
    No desenvolvimento estava recebendo bastante warn por causa das props passadas para os componentes, como solução eu comentei o código que verifica as props.

1. Dentro da raiz do projeto execute
    ```sh
        cd node_modules/react-native-neu-element/lib/utils 
    ```
2. Abra os seguintes arquivos
    ```sh
        NeuView.js && NeuBorderView.js
    ```
3. No final do arquivo NeuBorderView.js comente as seguinte linhas
    ```js
        NeuBorderView.propTypes = {
           color: PropTypes.string,
           width: PropTypes.number,
           height: PropTypes.number,
           borderRadius: PropTypes.number,
           borderWidth: PropTypes.number,
           containerStyle: PropTypes.any,
           style: PropTypes.object
        };

        export default NeuBorderView;

        //para

        /* NeuBorderView.propTypes = {
           color: PropTypes.string,
           width: PropTypes.number,
           height: PropTypes.number,
           borderRadius: PropTypes.number,
           borderWidth: PropTypes.number,
           containerStyle: PropTypes.any,
           style: PropTypes.object
        };

        export default NeuBorderView; */

    ```
4. No final do arquivo NeuView.js comente as seguinte linhas
    ```js

        NeuView.propTypes = {
            color: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number,
            radius: PropTypes.number,
            customLightShadow: ViewPropTypes,
            customDarkShadow: ViewPropTypes,
            borderRadius: PropTypes.number,
            customGradient: PropTypes.array,
            style: ViewPropTypes,
            containerStyle: PropTypes.any,
            inset: PropTypes.bool,
            convex: PropTypes.bool,
            concave: PropTypes.bool,
            noShadow: PropTypes.bool
        };

        export default NeuView;


        //para

        // NeuView.propTypes = {
        //   color: PropTypes.string,
        //   width: PropTypes.number,
        //   height: PropTypes.number,
        //   radius: PropTypes.number,
        //   customLightShadow: ViewPropTypes,
        //   customDarkShadow: ViewPropTypes,
        //   borderRadius: PropTypes.number,
        //   customGradient: PropTypes.array,
        //   style: ViewPropTypes,
        //   containerStyle: PropTypes.any,
        //   inset: PropTypes.bool,
        //   convex: PropTypes.bool,
        //   concave: PropTypes.bool,
        //   noShadow: PropTypes.bool
        // };

        // export default NeuView;


    ```
5. Em ambos arquivos modifique a exportação
    ```js
        //no NeuBorderView.js vai estar assim

        const NeuBorderView = props => {
            //...
        }

        // modifique para

        export default props => {
            //...
        } 

    ```

<!-- USAGE EXAMPLES -->
## Usage

Após modificar os arquivos é so rodar o seu app!

1.Start
```sh
    react-native start --reset-cache || npx react-native start --reset-cache
```
2.Run
```sh
    react-native rund-android || npx react-native run-android
```

## Erros

Problema na função TrackPlayer.seekTo();

Implementação da funcão no componente
```js
    const changeTime = (time /* Time em segundos */) => {
        TrackPlayer.seekTo(time);
    }

    Esse parâmetro time é em segundos já é passado automático pelo Slider
    levando em consideração que ele foi inicializado com 0 e o maxValue é a duração da música
    Exemplo: Arquivo onde está a função Painel.component.js


    const {position, duration} = useTrackPlayerProgress();

    <Slider
        style={style.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        thumbTintColor="#000"
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onSlidingComplete={changeTime}
    />

    /* Comportamento esperado ao utilizar a função
    *  Ao clicar no slider a música deveria ir para o time passado como parâmetro na função 
    * 
    *  Comportamento inesperado que ocorre ao utilizar a função
    *  Ao clicar no slider a musica deveria ir para o time passado como parâmetro na função, porém 
    *  a música acaba resetando e voltando para o início. 
    */
 
    // o mesmo erro acontece ao implementar o remote-seek

    TrackPlayer.addEventListaner('remote-seek', time => {
        TrackPlayer.seekTo(time.position);
    });

```



## Contato
[INSTAGRAM](https://www.instagram.com/joao_lim4/)
<br/>
[WHATSAPP](https://api.whatsapp.com/send/?phone=%2B5531989013076&text=Ola%20vim%20pelo%20app%20de%20m%C3%BAsica&app_absent=0&lang=pt_br)



