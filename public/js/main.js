var body = document.getElementsByTagName('body')[0];
            var finalText = document.getElementById("finalText");
            var pointsHtml = document.getElementById("pts");
            var nameHtml = document.getElementById("name");
            var menu = document.getElementById("menu");
            var play = document.getElementById("play");
            var maleBtn = document.getElementById("male");
            var femaleBtn = document.getElementById("female");
            var start = document.getElementById("start");
            var startBtn = document.getElementById("startBtn");
            var replayBtn = document.getElementById("replay");
            
            var points = 0;
            var data = {};

            var fetchData = async () => {
                const response = await fetch('/newName');
                const myJson = await response.json(); //extract JSON from the http response
                return myJson;
            };

            var replaceData = (serverData) => {
                data = serverData;
                nameHtml.textContent = `Le prénom ${data.firstName} est :`
            };

            var changeScore = () => {
                pointsHtml.textContent = `${points}/20 points`;
            }

            var newName = () => {
                fetchData().then(dat => replaceData(dat)); 
            }
            
            function init(){
                points = 10;
                changeScore();
                newName();
            };
            
            var checkAnswer = (input) => {
                if(input == data.gender){
                    points += 1;
                    body.classList.add('correct');
                    setTimeout(() =>{ body.classList.remove('correct');}, 1000);
                }else{
                    points -= 1;
                    body.classList.add('incorrect');
                    setTimeout(() =>{ body.classList.remove('incorrect');}, 1000);
                }
                changeScore();
            };


            var checkGameStatus = () => {
                if(points === 0) {
                    finalText.textContent = "Perdu..";
                    menu.style.display = "";
                    play.style.display = "none";
                     

                }else if(points === 20){
                    finalText.textContent = "Bravo, vous avez gagné";
                    menu.style.display = "";
                    play.style.display = "none";
                }
                newName();
            }

            var startGame = () => {
                start.style.display = "none";
                play.style.display = "";

            }

            var replay = () => {
                points = 10;
                changeScore();
                menu.style.display = "none";
                play.style.display = "";
            }

            startBtn.onclick = function() {startGame()};
            maleBtn.onclick = function(){checkAnswer("male"); checkGameStatus()};
            femaleBtn.onclick = function(){checkAnswer("female"); checkGameStatus()};
            replayBtn.onclick = function(){replay()};

            init();