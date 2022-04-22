function game() {
    let lineCount = 3;
    let pokers = [3, 5, 7];
    let playerCount = 2;
    let player = 1;

    function nextPlayer() {
        player = player % playerCount + 1;
        return player;
    }

    let result = {
        nextPlayer: player,
        gameOver: false,
        winner: null
    }

    function pick(line, count) {
        if (result.gameOver) {
            alert('游戏已结束，玩家 ' + result.winner + ' 赢了！')
            return result;
        }

        if (line != parseInt(line) || line < 1 || line > lineCount) {
            alert('行号输入无效，请输入1-' + lineCount + '！');
            return result;
        }

        if (count != parseInt(count) || count < 0) {
            alert('数量输入无效，请输入一个大于或等于0的整数！');
            return result;
        }

        if (count == 0) {
            result.nextPlayer = nextPlayer();
            return result;
        }

        line = line - 1;

        if (pokers[line] == 0) {
            alert('第' + (line + 1) + '行已经没有牌了！')
            return result;
        }

        if (pokers[line] < count) {
            alert('第' + (line + 1) + '行最多只能拿' + pokers[line] + '张！')
            return result;
        }

        pokers[line] = pokers[line] - count;

        let total = pokers.reduce((total = 0, n) => total = total + n);

        if (total === 0) {
            result.gameOver = true
            result.winner = nextPlayer();
        } else {
            result.nextPlayer = nextPlayer();
        }

        return result;
    }

    return pick;
}
