//ボタンの要素を取得
const button = document.getElementById("add-button");

//「クリックされたとき」の処理を定義
button.addEventListener("click", function () {
    //入力欄の中身を取得
    const text = document.getElementById("todo-input").value;
    //空の場合はリストの追加を禁止する
    if (!text.trim()) return;

    //li要素を生成
    const li = document.createElement("li");
    //テキストノードを作ってliに追加
    const textNode = document.createTextNode(text);
    li.appendChild(textNode);

    //削除ボタンを作る
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除"

    //liにボタンを追加
    li.appendChild(deleteButton);

    //ulを取得
    const ul = document.querySelector('ul');
    //ulの最後の子要素として追加
    ul.appendChild(li);

    //入力後にテキストボックスをクリア
    document.getElementById("todo-input").value = "";
});

