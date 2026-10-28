// Worksのデータ（本番では管理画面から追加・編集した内容がここに入る想定）
// ※ カンプ用のサンプルです。アーティスト名・作品名はすべて架空です。
const WORKS = [
  { artist:'The Driftwoods', title:'Harbor Lights', year:2026, studio:'K', roles:['Rec','Mix','Master'], c1:'#1f5f63', c2:'#0d1f24' },
  { artist:'海月と灯台', title:'夜明けの手紙', year:2026, studio:'Y', roles:['Rec','Mix'], c1:'#b76a3a', c2:'#2a1510' },
  { artist:'NORTH LIGHT', title:'Paper Planes EP', year:2026, studio:'Y', roles:['Rec','Mix','Master'], c1:'#48506e', c2:'#15171f' },
  { artist:'sayo.', title:'ひかりの粒', year:2025, studio:'Y', roles:['Track','Mix'], c1:'#c9a36a', c2:'#3b2a17' },
  { artist:'Low Tide Club', title:'Summer Static', year:2026, studio:'K', roles:['Rec','Mix'], c1:'#2f8a7e', c2:'#0f2a26' },
  { artist:'青い午後', title:'Blue Afternoon', year:2025, studio:'Y', roles:['Mix','Master'], c1:'#3b6ea5', c2:'#101b29' },
  { artist:'Mellow Pint', title:'Last Order', year:2025, studio:'Y', roles:['Rec','Mix','Master'], c1:'#8a3b3b', c2:'#1f0e0e' },
  { artist:'カナタ', title:'遠くの街まで', year:2025, studio:'Y', roles:['作曲','Track'], c1:'#6b6f3a', c2:'#1b1c0e' },
];
const ROLE_JA = { Rec:'レコーディング', Mix:'ミックス', Master:'マスタリング', Track:'トラック制作', '作曲':'作曲' };

function workCard(w){
  const st = w.studio==='K' ? '<span class="K">高知</span>' : '<span class="Y">センター北</span>';
  return `<article class="work" data-s="${w.studio}" data-r="${w.roles.join(' ')}">
    <div class="cover" style="background:linear-gradient(150deg,${w.c1},${w.c2})">
      <span class="ca">${w.artist.toUpperCase()}</span>
      <span class="ct">${w.title}</span>
      <span class="play">▶</span>
    </div>
    <div class="meta">
      <div class="a">${w.artist}</div>
      <div class="t">${w.title}（${w.year}）</div>
      <div class="roles">${st}${w.roles.map(r=>`<span>${ROLE_JA[r]}</span>`).join('')}</div>
    </div>
  </article>`;
}
