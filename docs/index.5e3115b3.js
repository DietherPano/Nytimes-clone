const t=async()=>{try{let[t,e,o,i]=await Promise.all([fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=lSrYSuDvazLUypccjNyoCU58FzJhKDa2"),fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=lSrYSuDvazLUypccjNyoCU58FzJhKDa2}"),fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=lSrYSuDvazLUypccjNyoCU58FzJhKDa2"),fetch("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=lSrYSuDvazLUypccjNyoCU58FzJhKDa2")]);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);if(!o.ok)throw Error(`HTTP error! status: ${o.status}`);if(!i.ok)throw Error(`HTTP error! status: ${i.status}`);let a=await t.json(),r=await e.json(),n=await o.json(),s=await i.json();return{topNewsData:a,popularArticlesData:r,booksData:n,books1Data:s}}catch(t){return console.error("An error occurred while fetching data:",t),{topNewsData:{results:[]},popularArticlesData:{results:[]},booksData:{results:[]},books1Data:{results:[]}}}},e=document.getElementById("top-stories"),o=document.getElementById("related-stories"),i=document.getElementById("books-section-home"),a=document.getElementById("hardcover-fictions"),r=document.getElementById("stephen-king"),n=t=>{e.innerHTML="",r.innerHTML="",a.innerHTML="",(t.results||[]).slice(0,12).forEach(t=>{let o=document.createElement("div");o.setAttribute("class","article");let i=t.multimedia?.[0]?.url?`<img src="${t.multimedia[0].url}" alt="${t.title}" class="article-img" onclick="window.open('${t?.url||"#"}')">`:"",a=t.multimedia?.[0]?.url?`<img src="${t.multimedia[0].url}" alt="${t.title}"
        class="tablet-img" onclick="window.open('${t?.url||"#"}"')>`:"",r=t.multimedia?.[0]?.url?`<img src="${t.multimedia[1].url}" alt="${t.title}"
        class="mobile-img" onclick="window.open('${t?.url||"#"}"')>`:"",n=`
      ${r}
      ${a}
      <div class="article-contents">
        <h3>${t.subsection}
        <h2><a onclick="window.open('${t?.url||"#"}')">${t?.title||"No Title"}</a></h2>
        <p>${t?.abstract||"No Abstract"}</p>
        <button class="read-more" onclick="window.open('${t?.url||"#"}"')>Read More <i class='bx bx-right-arrow-alt'></i>
      </div>
      <div class="additional-content">
      ${i}
      <p>${t.multimedia[1].caption}
      <h4>${t.multimedia[1].copyright}
      </div>
      `;o.innerHTML=`${n}`,e.appendChild(o)})},s=t=>{o.innerHTML="",r.innerHTML="",a.innerHTML="",(t.results||[]).slice(0,10).forEach(t=>{let e=document.createElement("div");e.setAttribute("class","popular-articles");let i=t.media?.[0]?.["media-metadata"]?.[2]?.url?`<img src="${t.media[0]["media-metadata"][2].url}" alt="${t?.title||"No Title"}" class="solo-article" onclick="window.open('${t?.url||"#"}')">`:"",a=`
      <div class="popular-article">
        <h3>${t.section}</h3>
        ${i}
        <h2><a onclick="window.open('${t?.url||"#"}')">${t?.title||"No Title"}</a></h2>
        <h4>${t?.byline||"No Byline"} | ${t.media?.[0]?.copyright||"No Source"}</h4>
        <p>${t?.abstract||"No Abstract"}</p>
      </div>
      `;e.innerHTML=`${a}`,o.appendChild(e)})},l=t=>{console.log(t),i.innerHTML="",r.innerHTML="",a.innerHTML="",(t.results.books||[]).slice(0,5).forEach(t=>{let e=document.createElement("div");e.setAttribute("class","hardcover-fiction");let o=`<img src='${t.book_image}' alt="${t.title||"no title"} " class="book">`,a=`<h3>${t.rank}</h3>`,r=`<div class="hardcover-fiction-books">
                            <h2>${t.title}</h2>
                            <p>by ${t.author} | ${t.publisher}</p>
                            <p>${t.description}</p>
                            <button id='buylinks' onclick="window.open('${t.amazon_product_url||"#"}')">Buy</button>
                          </div>`;e.innerHTML=`${a} ${r} ${o}`,i.appendChild(e)})},c=t=>{document.querySelectorAll(".title").forEach(t=>{t.innerHTML=""}),e.innerHTML="",o.innerHTML="",i.innerHTML="",a.innerHTML="";let r=document.createElement("h1");r.setAttribute("class","book-title"),r.textContent="Hard Cover Fiction",a.appendChild(r);let n=document.createElement("div");n.setAttribute("class","books-row"),n.setAttribute("id","books-row"),(t.results.books||[]).forEach(t=>{let e=document.createElement("div");e.setAttribute("class","books-section");let o=`<img src='${t.book_image}' alt="${t.title||"no title"}" class="book">`,i=`<h3>${t.rank}.</h3>`,r=`
      <div class="books-section-content">
        <h2>${t.title}</h2>
        <p>by ${t.author} | ${t.publisher}</p>
        <p>${t.description}</p>
        <button id='buylinks' onclick="window.open('${t.amazon_product_url||"#"}')">Buy</button>
      </div>`;e.innerHTML=`${i} ${r} ${o}`,n.appendChild(e),a.appendChild(n)})},d=t=>{r.innerHTML="";let e=document.createElement("h1");e.setAttribute("class","book-title"),e.textContent="Stephen King",r.appendChild(e),(t.results||[]).forEach(t=>{let e=document.createElement("div");e.setAttribute("class","stephen-king-section");let o=`
      <div class="stephen-king-section-content">
        <h2>${t.book_title}</h2>
        <p>by ${t.book_author} | ${t.byline}</p>
        <p>${t?.summary||"No Summary"}</p>
        <button id='read-more' onclick="window.open('${t?.url||"#"}')">Read More <i class='bx bx-right-arrow-alt'>
      </div>`;""==!t.summary&&(e.innerHTML=`${o}`,r.appendChild(e))})};function u(t){document.querySelectorAll("nav ul li a").forEach(e=>{e.dataset.section===t?e.classList.add("active"):e.classList.remove("active")})}(async()=>{let{topNewsData:e,popularArticlesData:o,booksData:i,books1Data:a}=await t();n(e),s(o),l(i),u("home"),document.getElementById("libro").addEventListener("click",()=>{c(i),d(a),u("books")}),document.getElementById("home").addEventListener("click",()=>{n(e),s(o),l(i),u("home")})})();
//# sourceMappingURL=index.5e3115b3.js.map
