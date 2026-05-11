let startTime = 0;
let leaderboardCount = 0;
let gameEnded = false;

function animate(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    handleRipples();
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    handleParticles();
    frogger.draw();
    frogger.update();

    handleObstacles();
    handleScoreBoard();
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    if (gameEnded == false) {
        if (score >= 5 && easybool == true) {
            const endTime = Date.now();
            const time = (endTime - startTime)/1000;
            gameEnded = true;
            leaderboardCount++;
            if (leaderboardCount == 1) {
                leaderboard1.textContent = `1) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 2) {
                leaderboard2.textContent = `2) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 3) {
                leaderboard3.textContent = `3) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 4) {
                leaderboard4.textContent = `4) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 5) {
                leaderboard5.textContent = `5) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 6) {
                leaderboard6.textContent = `6) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 7) {
                leaderboard7.textContent = `7) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 8) {
                leaderboard8.textContent = `8) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 9) {
                leaderboard9.textContent = `9) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 10) {
                leaderboard10.textContent = `10) Easy | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            }
            score = 0;
            collisionsCount = 0;
            ctx4.drawImage(greenbackground, 0, 0, canvas.width, canvas.height);
            ctx4.fillStyle = 'green';
            ctx4.strokeStyle = 'white';
            ctx4.font = '60px Verdana';
            ctx4.fillText('You won!', 160, 200);
            ctx4.fillText('Press up to replay', 30, 300)
            ctx4.fillText(time, 180, 400);
            if (keys[37] || keys[38] || keys[39] || keys[40]){
                resetGame();
        }
        }
        else if (score >= 15 && mediumbool == true) {
            const endTime = Date.now();
            const time = (endTime - startTime)/1000;
            gameEnded = true;
            leaderboardCount++;
            if (leaderboardCount == 1) {
                leaderboard1.textContent = `1) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 2) {
                leaderboard2.textContent = `2) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 3) {
                leaderboard3.textContent = `3) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 4) {
                leaderboard4.textContent = `4) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 5) {
                leaderboard5.textContent = `5) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 6) {
                leaderboard6.textContent = `6) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 7) {
                leaderboard7.textContent = `7) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 8) {
                leaderboard8.textContent = `8) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 9) {
                leaderboard9.textContent = `9) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 10) {
                leaderboard10.textContent = `10) Medium | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            }
            ctx4.drawImage(greenbackground, 0, 0, canvas.width, canvas.height);
            ctx4.fillStyle = 'green';
            ctx4.strokeStyle = 'white';
            ctx4.font = '60px Verdana';
            ctx4.fillText('You won!', 160, 200);
            ctx4.fillText('Press up to replay', 30, 300)
            ctx4.fillText(time, 180, 400);
        }
        else if (score >= 30 && hardbool == true) {
            const endTime = Date.now();
            const time = (endTime - startTime)/1000;
            gameEnded = true;
            leaderboardCount++;
            if (leaderboardCount == 1) {
                leaderboard1.textContent = `1) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 2) {
                leaderboard2.textContent = `2) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 3) {
                leaderboard3.textContent = `3) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 4) {
                leaderboard4.textContent = `4) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 5) {
                leaderboard5.textContent = `5) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 6) {
                leaderboard6.textContent = `6) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 7) {
                leaderboard7.textContent = `7) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 8) {
                leaderboard8.textContent = `8) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 9) {
                leaderboard9.textContent = `9) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            } else if (leaderboardCount == 10) {
                leaderboard10.textContent = `10) Hard | Score: ${score} | Time: ${time} | Collisions: ${collisionsCount}`;
            }
            ctx4.drawImage(greenbackground, 0, 0, canvas.width, canvas.height);
            ctx4.fillStyle = 'green';
            ctx4.strokeStyle = 'white';
            ctx4.font = '60px Verdana';
            ctx4.fillText('You won!', 160, 200);
            ctx4.fillText('Press up to replay', 30, 300)
            ctx4.fillText(time, 180, 400);
        }
    }
    if (collisionsCount >= 10 && easybool == true) {
        const endTime = Date.now();
        const time = (endTime - startTime)/1000;
        ctx4.drawImage(blackbackground, 0, 0, canvas.width, canvas.height);
        ctx4.fillStyle = 'red';
        ctx4.strokeStyle = 'white';
        ctx4.font = '60px Verdana';
        ctx4.fillText('You lost!', 160, 200);
        ctx4.fillText(time, 180, 350);
    }
    else if (collisionsCount >= 5 && mediumbool == true) {
        const endTime = Date.now();
        const time = (endTime - startTime)/1000;
        ctx4.drawImage(blackbackground, 0, 0, canvas.width, canvas.height);
        ctx4.fillStyle = 'red';
        ctx4.strokeStyle = 'white';
        ctx4.font = '60px Verdana';
        ctx4.fillText('You lost!', 160, 200);
        ctx4.fillText(time, 180, 350);
    }
    else if (collisionsCount >= 1 && hardbool == true) {
        const endTime = Date.now();
        const time = (endTime - startTime)/1000;
        ctx4.drawImage(blackbackground, 0, 0, canvas.width, canvas.height);
        ctx4.fillStyle = 'red';
        ctx4.strokeStyle = 'white';
        ctx4.font = '60px Verdana';
        ctx4.fillText('You lost!', 160, 200);
        ctx4.fillText(time, 180, 350);
    }
    frame++;
    requestAnimationFrame(animate);
}
easy.addEventListener('click', function(){
    startTime = Date.now();
    score = 0;
    collisionsCount = 0;
    easybool = true;
    gameSpeed = 1.5;
    easy.remove();
    medium.remove();
    hard.remove();
})

medium.addEventListener('click', function(){
    startTime = Date.now();
    score = 0;
    collisionsCount = 0;
    mediumbool = true;
    gameSpeed = 2
    easy.remove();
    medium.remove();
    hard.remove();
})

hard.addEventListener('click', function(){
    startTime = Date.now();
    score = 0;
    collisionsCount = 0;
    hardbool = true;
    gameSpeed = 3
    easy.remove();
    medium.remove();
    hard.remove();
})

animate();


//event listeners
window.addEventListener('keydown', function(e){
    gameEnded = false;
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump();
    }
});

window.addEventListener('keyup', function(e){
    gameEnded = false;
    delete keys[e.keyCode];
    frogger.moving = false;
    frogger.frameX = 0;
});

function scored(){
    if (easybool == true) {
        score++;
    }
    else if (mediumbool == true) {
        score = score + 2;
    }
    else if (hardbool == true) {
        score = score + 3;
    } else {
        score++;
    }
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Score', 265, 15)
    ctx4.font = '60px Verdana'
    ctx4.fillText(score, 270, 65);
    ctx4.font = '15px Verdana';
    ctx4.strokeText("Collisions: " + collisionsCount, 10, 175);
    ctx4.strokeText("Game Speed: " + gameSpeed.toFixed(1), 10, 195);
}

//collision detection between two rectangles
function collision(first, second){
    return !(first.x > second.x + second.width ||
             first.x + first.width < second.x ||
             first.y > second.y + second.height ||
             first.y + first.height < second.y);
}

function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionsCount++;
    gameEnded = false;
    if (easybool == true) {
        gameSpeed = 1.5;
    }
    else if (mediumbool == true) {
        gameSpeed = 2;
    }
    else if (hardbool == true) {
        gameSpeed = 3;
    } else {
        gameSpeed = 1;
    }
}