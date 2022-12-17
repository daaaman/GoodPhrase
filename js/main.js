'use strict';

{
  const divNum = 10;
  const arrPhrase = [
    // [phrase, src]
    [["･･････男にゃあ！！！どうしても･･･戦いを避けちゃならねェ時がある･･････！！！仲間の夢を　笑われた時だ！！！！！"], ["ウソップ"]],
    [["おれたちの命くらい一緒に賭けてみろ！！！仲間だろうが！！！！"], ["モンキー・D・ルフィ"]],
    [["正義なんてのは　立場によって形を変える"], ["ロロノア・ゾロ"]],
    [["正義が勝つって！？そりゃあそうだろ\n勝者だけが正義だ！！！"], ["ドンキホーテ・ドフラミンゴ"]],
    [["おれが万能薬になるんだ！！だってこの世に治せない病気などないのだから！！！！！"], ["トニートニー・チョッパー"]],
    [["悔やむ事も当然…。やりきれぬ思いも当然。失ったものは大きく、得たものはない。…だがこれは前進である!!戦った相手が誰であろうとも、戦いは起こり、今終わったのだ!!過去を無きものになど、誰にもできはしない!!!…………この戦争の上に立ち!!!生きてみせよ!!!!"], ["ネフェルタリ・コブラ"]],
    [["歴史は…人の財産。あなた達がこれから生きる未来をきっと照らしてくれる。だけど過去から受け取った歴史は次の時代へ引き渡さなくちゃ消えていくの"], ["ニコ・オルビア"]],
    [["受けた愛に理由などつけるな！！！"], ["センゴク"]],
    [["人の夢は！！！ 終わらねェ！！！！"], ["マーシャル・D・ティーチ"]],
    [["もうどんな未来も受け入れる　差し伸べられた手は掴む…！！"], ["ポートガス・D・エース"]],
    [["お前のような男がプライドを捨てる時は必ず誰かの為だと決まっている"], ["ジュラキュール・ミホーク"]],
    [["恩を返せぬ無念以上に痛いものなどありません!!!"], ["ブルック"]],
    [["理想ってのは実力が伴う者のみ口にできる”現実”だ…!!"], ["サー・クロコダイル"]],
    [["場所を変えなきゃ…見えねェ景色もあるもんだ"], ["トラファルガー・ロー"]],
    [["その船は設計図だけじゃ完成しねェんだ!!! 出航していくつもの海を越えて　幾度もの戦いや困難を乗り切って･･･ “海の果て”へ到達したとき･･････!! それを“夢の船”と呼ぶんだ!!"], ["フランキー"]],
    [["おれ達が恨みのままに人間達への復讐を始めれば、その後生まれるのは更なる人間からの復讐っていう悲劇だけだ"], ["フィッシャー・タイガー"]],
    [["おれは笑顔で死ぬからよ…!!だってお前…いつかおれを思い出してもらうなら 笑顔の方がいいもんな"], ["コラソン"]],
    [["失った物ばかり数えるな!!無いものは無い！確認せい！お前にまだ残っておるものな何じゃ!!!"], ["ジンベエ"]],
    [["未来を変える権利は皆 平等にあるんだよ!!!"], ["カポネ・ベッジ"]],
    [["欲をかいた権力者の純心に比べたら、世の悪党の方がいくらか人道的だ。クズが世界を支配するからクズが生まれる"], ["ユースタス・キッド"]],
    [["昔はおれも自力の過信と野心に満ちてた。だが理解したんだ。優れた部下の重要性をな。"], ["ゲッコー・モリア"]],
    [["今の内に行け!!　私の諦めは早いぞ!!!　借りの作りっぱなしはゴメンだガネ!!!"], ["Mr.3 ギャルディーノ"]],
    [["忘れ形見の花びら残し いつか再び 咲かせてみせよう オカマ道（ウェイ）オカマ畑で また会おう!!!"], ["Mr.2 ボン・クレー"]],
    [["覚悟決めりゃあ　敵が恐ェだの てめェが傷つかねェ方法だの　くだらねェこと考えなくて済むことを　その人に教えて貰ったよ…!!"], ["ギン"]],
    [["弱ェと言われてとりみだす奴ァ 自分で弱ェと認めてる証拠だ"], ["ドン・クリーク"]],
    [["誰かの為に強くなりたいなんて考えた事もなかった……!!"], ["ニコ・ロビン"]],
    [["……長い間!!!くそお世話になりました!!"], ["サンジ"]],
    [["……助けて…"], ["ナミ"]],
  ];

  const container = document.getElementById('container');

  const w = Math.floor(document.documentElement.clientWidth * 0.7);
  const h = Math.floor(document.documentElement.clientHeight * 0.8);

  class createList {
    constructor(i, initFrame) {
      this.i = i;
      this.initFrame = initFrame;
      // console.log(i, initFrame);
    }

    createElement() {
      const list = document.createElement('div');
      list.setAttribute('id', 'list-' + this.i);
      list.classList.add("list");
      
      const bq = document.createElement('blockquote');
      bq.style.opacity = 0.0;
      list.appendChild(bq);
      
      const phrase = document.createElement('p');
      phrase.setAttribute('id', 'phrase-' + + this.i);
      phrase.classList.add("phrase");
      bq.appendChild(phrase);
      
      const sources = document.createElement('p');
      sources.setAttribute('id', 'sources-' + + this.i);
      sources.classList.add("sources");
      bq.appendChild(sources);
  
      container.appendChild(list);
    }
    
    update(cnt) {
      const list = document.getElementById('list-' + this.i);
      const opacity = list.childNodes[0].style.opacity;
  
      if(cnt === this.initFrame) {
        if(w <= 480) {
          list.style.left = '0px';
        } else {
          list.style.left = Math.floor(Math.random() * w) + 'px';
        }
        list.style.top = Math.floor(Math.random() * h) + 'px';

        let ran = Math.floor(Math.random() * arrPhrase.length);
        document.getElementById('phrase-' + this.i).textContent = arrPhrase[ran][0,0];         
        document.getElementById('sources-' + this.i).textContent = arrPhrase[ran][0,1];
        // opacity10.0にすることで、1未満になる時間をかせぐ
        list.childNodes[0].style.opacity = 10.0;
      }
  
      list.childNodes[0].style.opacity *= 0.90;
      if(list.childNodes[0].style.opacity < 0.03) {
        list.childNodes[0].style.opacity = 0.0;
      }
    }
  }

  let list = [];

  for (let i = 0; i < divNum; i++) {
    list[i] = new createList(i, i * divNum * 3);
    list[i].createElement();
  }

  let cnt = 0;

  setInterval(() => {
    for (let i = 0; i < divNum; i++) {
      list[i].update(cnt);
    }

    cnt++;
    if(cnt > divNum * 30) {
      cnt = 0;
    }
  }, 100);
}
