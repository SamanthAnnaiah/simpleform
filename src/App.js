import { ButtonItem } from './ButtonItem';
import { InputItem } from './InputItem';
import { ItemHeading } from './ItemHeading';
import { MainHeading } from './MainHeading';
import { MesItem } from './MesItem';
import { TextAreaItem } from './TextAreaItem';

import './sform.css';
import { useSimpleformstates } from './useSimpleformstates';

function App() {

  let { fname, setfname,
    sname, setsname,
    femail, setfemail,
    qtype, setqtype,
    mes, setmes,
    consent, setconsent,
    submit, setsubmit,
    errorcheck, seterrorcheck,
    isvisible, setvisible } = useSimpleformstates();

  function submitcheck() {
    console.log("fname:", fname);
    console.log("sname:", sname);
    console.log("femail:", femail);
    console.log("qtype:", qtype);
    console.log("mes:", mes);
    console.log("consent:", consent);
    if (errorcheck) {
      setsubmit(false)
    } else {
      if (fname === " " || sname === " " || fname === null || sname === null || femail === " " || femail === null
        || femail === " " || femail === null || mes === " " || mes === null || !consent) {
        setsubmit(false)
      }
      else {
        setsubmit(true)
      }
    }
    setvisible(true)
  }

  let mes1 = "✅ Message sent!";
  let mes2 = "Thanks for Completing the form.";
  let err1 = "❌ Message not sent!";
  let err2 = "Fix the errors and submit again!";

  return (
    <>
      <div className='maindiv'>
        <MainHeading classes={'kkb m20 fs'} stuff={"Contact Us"} />
        <div className='flx m20 w100'>
          <div className='w50'>
            <ItemHeading classes={'kkr fs1'} stuff={"First Name"} />
            <InputItem classes={'kkr inp w50'} istate={fname} setistate={setfname}
              errorcheck={errorcheck} seterrorcheck={seterrorcheck} patn="^[A-Za-z]{2,7}$" />
          </div>
          <div className='w50'>
            <ItemHeading classes={'kkr fs1'} stuff={"Second Name"} />
            <InputItem classes={'kkr inp w50'} istate={sname} setistate={setsname}
              errorcheck={errorcheck} seterrorcheck={seterrorcheck} patn="^[A-Za-z]{2,7}$" />
          </div>
        </div>
        <div className='m20 w100'>
          <ItemHeading classes={'kkr fs1'} stuff={"Email Address"} />
          <InputItem classes={'kkr inp w80'} istate={femail} setistate={setfemail}
            errorcheck={errorcheck} seterrorcheck={seterrorcheck}
            patn="(([a-zA-Z0-9\!\#\$\%\&'\*\+\-\=\?\^\_\`\{\|\}~]){2,20})@(([a-zA-Z0-9]){3,20})\.(com|net|edu|in|gov)" />
        </div>
        <ItemHeading classes={'kkr m20'} stuff={"Query Type"} />
        <div className='flx m10 w100'>
          <div className='w50'>
            <div className='inp w50 genquiry'>
              <InputItem classes={'kkr'} itype={"rbutton"} iname={"rquery"} stuff={"General Enquiry"}
                istate={qtype} setistate={setqtype} errorcheck={errorcheck} seterrorcheck={seterrorcheck} />
            </div>
          </div>
          <div className='w50'>
            <div className='inp w50 srequest'>
              <InputItem classes={'kkr'} itype={"rbutton"} iname={"rquery"} stuff={"Support Request"}
                istate={qtype} setistate={setqtype} errorcheck={errorcheck} seterrorcheck={seterrorcheck} />
            </div>
          </div>
        </div>
        <div className='m20 w100'>
          <ItemHeading classes={'kkr fs1'} stuff={"Message"} />
          <TextAreaItem classes={'kkr inp w80'} istate={mes} setistate={setmes}
            errorcheck={errorcheck} seterrorcheck={seterrorcheck} />
        </div>
        <InputItem classes={'kkr m20 size1'} itype={"rcheck"} stuff={"I consent to being contacted by the team"}
          istate={consent} setistate={setconsent} errorcheck={errorcheck} seterrorcheck={seterrorcheck} />
        <ButtonItem classes={'kkr m10 mt1 inp w80 tc bcolor col1 btn'} stuff={"Submit"} submitcheck={submitcheck} />
      </div>
      <MesItem classes={'result kkb col1'} mes1={mes1} mes2={mes2}
        err1={err1} err2={err2} istate={submit} setistate={setsubmit}
        isvisible={isvisible} setvisible={setvisible} />
    </>
  );
}

export default App;
