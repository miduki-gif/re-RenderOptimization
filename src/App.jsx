import { useState, useCallback, useMemo} from "react"
import { MemoizedChildArea } from "./ChildArea";

export default function App(){
  console.log('App');
 const [text ,setText] = useState('');
 const [open ,setOpen] = useState(false);
 const onChangeText = (e) => setText(e.target.value);

 const onClickOpen = () => setOpen(!open);
//useCallbackを使用することによって関数のmemo化をしてレンダリングの最適化をすることができる。
//useCallbackを使用するときには第2引数に配列を持つ⇒監視する値
 const onClickClose = useCallback(() => setOpen(false), [setOpen]);

 //変数のメモ化（コンポーネントのメモ化とは違う）
 //第一引数には関数、第2引数には依存配列を持つ
 //依存配列とは配列内の値が変ったときにのみ新しい関数を作成するもの
 const temp = useMemo(() =>1 + 3, []);
 console.log(temp);
  return(
    <dev className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <MemoizedChildArea open={open} onClickClose={onClickClose}/>
    </dev>
  )
}