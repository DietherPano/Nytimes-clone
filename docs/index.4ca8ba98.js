const t=async()=>{try{let[t,e,o,i]=await Promise.all([fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OFLLqsGZSsAo17IU6V6M891n9cVBxYSA"),fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=OFLLqsGZSsAo17IU6V6M891n9cVBxYSA}"),fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=OFLLqsGZSsAo17IU6V6M891n9cVBxYSA"),fetch("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=OFLLqsGZSsAo17IU6V6M891n9cVBxYSA")]);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);if(!o.ok)throw Error(`HTTP error! status: ${o.status}`);if(!i.ok)throw Error(`HTTP error! status: ${i.status}`);let s=await t.json(),n=await e.json(),a=await o.json(),r=await i.json();return{topNewsData:s,popularArticlesData:n,booksData:a,books1Data:r}}catch(t){return console.error("An error occurred while fetching data:",t),{topNewsData:{results:[]},popularArticlesData:{results:[]},booksData:{results:[]},books1Data:{results:[]}}}},e=document.getElementById("top-stories"),o=document.getElementById("related-stories"),i=document.getElementById("books-section-home"),s=document.getElementById("hardcover-fictions"),n=document.getElementById("stephen-king"),a=t=>{e.innerHTML="",n.innerHTML="",s.innerHTML="",(t.results||[]).slice(0,12).forEach(t=>{let o=document.createElement("div");o.setAttribute("class","article");let i=t.multimedia?.[0]?.url?`<img src="${t.multimedia[0].url}" alt="${t.title}" class="article-img" onclick="window.open('${t?.url||"#"}')">`:"",s=t.multimedia?.[0]?.url?`<img src="${t.multimedia[0].url}" alt="${t.title}"
        class="tablet-img" onclick="window.open('${t?.url||"#"}"')>`:"",n=t.multimedia?.[0]?.url?`<img src="${t.multimedia[1].url}" alt="${t.title}"
        class="mobile-img" onclick="window.open('${t?.url||"#"}"')>`:"",a=`
      ${n}
      ${s}
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
      `;o.innerHTML=`${a}`,e.appendChild(o)})},r=t=>{o.innerHTML="",n.innerHTML="",s.innerHTML="",(t.results||[]).slice(0,10).forEach(t=>{let e=document.createElement("div");e.setAttribute("class","popular-articles");let i=t.media?.[0]?.["media-metadata"]?.[2]?.url?`<img src="${t.media[0]["media-metadata"][2].url}" alt="${t?.title||"No Title"}" class="solo-article" onclick="window.open('${t?.url||"#"}')">`:"",s=`
      <div class="popular-article">
        <h3>${t.section}</h3>
        ${i}
        <h2><a onclick="window.open('${t?.url||"#"}')">${t?.title||"No Title"}</a></h2>
        <h4>${t?.byline||"No Byline"} | ${t.media?.[0]?.copyright||"No Source"}</h4>
        <p>${t?.abstract||"No Abstract"}</p>
      </div>
      `;e.innerHTML=`${s}`,o.appendChild(e)})},l=t=>{console.log(t),i.innerHTML="",n.innerHTML="",s.innerHTML="",(t.results.books||[]).slice(0,5).forEach(t=>{let e=document.createElement("div");e.setAttribute("class","hardcover-fiction");let o=`<img src='${t.book_image}' alt="${t.title||"no title"} " class="book">`,s=`<h3>${t.rank}</h3>`,n=`<div class="hardcover-fiction-books">
                            <h2>${t.title}</h2>
                            <p>by ${t.author} | ${t.publisher}</p>
                            <p>${t.description}</p>
                            <button id='buylinks' onclick="window.open('${t.amazon_product_url||"#"}')">Buy</button>
                          </div>`;e.innerHTML=`${s} ${n} ${o}`,i.appendChild(e)})},c=t=>{document.querySelectorAll(".title").forEach(t=>{t.innerHTML=""}),e.innerHTML="",o.innerHTML="",i.innerHTML="",s.innerHTML="";let n=document.createElement("h1");n.setAttribute("class","book-title"),n.textContent="Hard Cover Fiction",s.appendChild(n);let a=document.createElement("div");a.setAttribute("class","books-row"),a.setAttribute("id","books-row"),(t.results.books||[]).forEach(t=>{let e=document.createElement("div");e.setAttribute("class","books-section");let o=`<img src='${t.book_image}' alt="${t.title||"no title"}" class="book">`,i=`<h3>${t.rank}.</h3>`,n=`
      <div class="books-section-content">
        <h2>${t.title}</h2>
        <p>by ${t.author} | ${t.publisher}</p>
        <p>${t.description}</p>
        <button id='buylinks' onclick="window.open('${t.amazon_product_url||"#"}')">Buy</button>
      </div>`;e.innerHTML=`${i} ${n} ${o}`,a.appendChild(e),s.appendChild(a)})},d=t=>{n.innerHTML="";let e=document.createElement("h1");e.setAttribute("class","book-title"),e.textContent="Stephen King",n.appendChild(e),(t.results||[]).forEach(t=>{let e=document.createElement("div");e.setAttribute("class","stephen-king-section");let o=`
      <div class="stephen-king-section-content">
        <h2>${t.book_title}</h2>
        <p>by ${t.book_author} | ${t.byline}</p>
        <p>${t?.summary||"No Summary"}</p>
        <button id='read-more' onclick="window.open('${t?.url||"#"}')">Read More <i class='bx bx-right-arrow-alt'>
      </div>`;""==!t.summary&&(e.innerHTML=`${o}`,n.appendChild(e))})};function u(t){document.querySelectorAll("nav ul li a").forEach(e=>{e.dataset.section===t?e.classList.add("active"):e.classList.remove("active")})}(async()=>{let{topNewsData:e,popularArticlesData:o,booksData:i,books1Data:s}=await t();a(e),r(o),l(i),u("home"),document.getElementById("libro").addEventListener("click",()=>{c(i),d(s),u("books")}),document.getElementById("home").addEventListener("click",()=>{a(e),r(o),l(i),u("home")})})();
//# sourceMappingURL=index.4ca8ba98.js.map
