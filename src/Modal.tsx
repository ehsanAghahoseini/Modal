import { useEffect } from "react";

export const Modal = ({ visible, setVisible, uId, children }: any) => {

  useEffect(() => {
    const Modal = document.getElementById(`CModal-${uId}`);
    const contModal = document.getElementById(`CModal-cont-${uId}`);
    window.addEventListener('mousedown', function (e: any) {
      if (Modal!.contains(e.target)) {
        if (!contModal!.contains(e.target)) {
          setVisible(false)
        }
      }
    });
  }, [])

  return (
    <div id={`CModal-${uId}`} className={`CModal ${visible && 'CModal-active'}`}>
      <div id={`CModal-cont-${uId}`} className={`CModal-cont `} >
        {children}
      </div>
    </div>
  );
}

