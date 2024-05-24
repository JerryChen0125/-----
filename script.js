const text = `
埔里鎮的醒靈寺建於民國前十三年
寺廟中供奉著關聖帝君、呂祖仙與灶君
西元1901年時有一埔里居民為幫助母親戒除毒癮
將關聖帝君奉於家中
後來因相當靈驗吸引鄰近民眾前來參拜
於是創建了廟宇改化堂
並在重建後更名為醒靈寺
醒靈寺山門前有一對清末放置在衙門前的石獅
經過百多年來的歲月依舊佇立在山門前
寺廟後方有座文獻堂
展示著埔里鎮的重要文獻與老照片
訴說著埔里鎮的發展
謝謝觀看
.
`.trim();
const sentences = text.split('\n').map(sentence => sentence.replace(/，$/, ''));
const storyDiv = document.getElementById('story');
const startButton = document.getElementById('startButton');
let index = 0;

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    showNextSentence();
});

function showNextSentence() {
    if (index >= sentences.length || sentences[index].includes('.')) {
        index = 0;
        storyDiv.innerHTML = '';
        return; // 停止循環播放
    }

    const sentence = document.createElement('div');
    sentence.className = 'fade';
    sentence.textContent = sentences[index];
    storyDiv.appendChild(sentence);

    setTimeout(() => {
        sentence.classList.add('show');
    }, 100);

    setTimeout(() => {
        sentence.classList.remove('show');
        sentence.classList.add('fade');
    }, 2000);

    setTimeout(() => {
        storyDiv.removeChild(sentence);
        index++;
        showNextSentence();
    }, 4000);
}
