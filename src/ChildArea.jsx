import { memo } from "react";
const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
}

function ChildArea (props){
    const { open, onClickClose } =props;
    //レンダリングの負荷を高めて再レンダリングの最適化をするためのコード
    console.log("ChildAreaがレンダリングされた!!");
    const data = [...Array(2000).keys()];
    data.forEach(() => {
        console.log("...");
    })

    return(
        <>
        {open ? (
              <div style={style}>
              <p>子コンポーネント</p>
              <button onClick={onClickClose}>閉じる</button>
          </div>
        ) : null}
        </>
    );
}

// memo関数でChildArea関数をラップしてエクスポート
//memo化は親が再レンダリングされたときに子のコンポーネントがpropsの値が変わらない限り
//再レンダリングを起こさないように最適化をする仕組みのこと
export const MemoizedChildArea = memo(ChildArea);