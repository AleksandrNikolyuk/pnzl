
let resolve = ( res ) => {return res.json();},
    url = "http://www.json-generator.com/api/json/get/cpxSHZkeYy?indent=2";

    fetch(url)
    .then(resolve)
    .then( ImageSliderInit );


    function ImageSliderInit ( data ){
        // console.log( navigator );
        let config = {
            userLang: navigator.language,
            data: data
        };

        Render ( config );
        Handlers ( config );
    }

    // let userLang = navigator.language;
        // userLang = "ua";
    function Render (config){
        let { userLang, data } = config;
        console.log( 'render', userLang, data);
        // let CaruselData = document.getElementById('caseRender');
        //     CaruselData.innerHTML = data[0].name[userLang];

        let CaruselData = document.getElementById('indexCarusel');
        let CaruselDataItem = document.getElementById('index');
        data.map( item => {
            // let Imag = item.productThumbnailUrl;
            //     console.log(item);
            let x = document.createElement('div');
                x.className = 'carusel__selectedItemData';
                x.innerHTML = `
                        <header class="carusel__selectedItemHeader">
                          <h3 class="carusel__selectedItemTitle">${item.name[userLang]}</h3>
                          <div class="carusel__selectedItemCategory latest">Новинки</div>
                        </header>
                        <div class="carusel__selectedItemDescription">
                          Magna consequat pariatur amet sint amet nulla ipsum. Occaecat incididunt enim nisi nulla reprehenderit aliqua veniam id exercitation officia sit ipsum. Eiusmod eiusmod magna ullamco cupidatat ea
                        </div>
                        <div class="carusel__selectedItemAuthor">
                          <div class="carusel__selectedItemAuthorType">
                            Автор:
                          </div>
                          <a href="#" class="carusel__selectedItemAuthorValue">
                            Summer Gilbert
                          </a>
                        </div>

                        <div class="carusel__selectedItemAuthor">
                          <div class="carusel__selectedItemAuthorType">
                            Іллюстратор:
                          </div>
                          <a href="#" class="carusel__selectedItemAuthorValue">
                            Pollard Chandler
                          </a>
                        </div>

                        <div class="carusel__selectedItemAuthor">
                          <div class="carusel__selectedItemAuthorType">
                            Перекладач:
                          </div>
                          <a href="#" class="carusel__selectedItemAuthorValue">
                            Cathy Castaneda
                          </a>
                        </div>
            `;
            CaruselData.appendChild(x);
            });




    }
    function Handlers (config){

        let langChanger = document.getElementById('langChanger');
        let langButtons = langChanger.querySelectorAll('.langChange__button');

            langButtons.forEach( function(item){
                item.addEventListener('click', function(event){
                    // console.log(event.target.dataset.lang);
                    config.userLang = event.target.dataset.lang;
                    console.log(config);
                    Render( config );
                });
            });


        // .addEventListener()
    }




    /*

    let CaruselData = document.getElementById('indexCarusel');
    let CaruselDataItem = document.getElementById('index');
    data.map( item => {
        let Imag = item.productThumbnailUrl;
            console.log(item);
        let x = document.createElement('div');
            x.className = 'carusel__selectedItemData';
            x.innerHTML = `
                    <header class="carusel__selectedItemHeader">
                      <h3 class="carusel__selectedItemTitle">${item.name[userLang]}</h3>
                      <div class="carusel__selectedItemCategory latest">Новинки</div>
                    </header>
                    <div class="carusel__selectedItemDescription">
                      Magna consequat pariatur amet sint amet nulla ipsum. Occaecat incididunt enim nisi nulla reprehenderit aliqua veniam id exercitation officia sit ipsum. Eiusmod eiusmod magna ullamco cupidatat ea
                    </div>
                    <div class="carusel__selectedItemAuthor">
                      <div class="carusel__selectedItemAuthorType">
                        Автор:
                      </div>
                      <a href="#" class="carusel__selectedItemAuthorValue">
                        Summer Gilbert
                      </a>
                    </div>

                    <div class="carusel__selectedItemAuthor">
                      <div class="carusel__selectedItemAuthorType">
                        Іллюстратор:
                      </div>
                      <a href="#" class="carusel__selectedItemAuthorValue">
                        Pollard Chandler
                      </a>
                    </div>

                    <div class="carusel__selectedItemAuthor">
                      <div class="carusel__selectedItemAuthorType">
                        Перекладач:
                      </div>
                      <a href="#" class="carusel__selectedItemAuthorValue">
                        Cathy Castaneda
                      </a>
                    </div>
        `;
        CaruselData.appendChild(x);
        });
    */
