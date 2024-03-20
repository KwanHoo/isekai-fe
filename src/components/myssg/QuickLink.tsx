import Link from 'next/link'
import style from './myssg.module.css'

export default function QuickLink() {
  return (
    <div className={style.myssg_sec}>
      <div className={style.myssg_sec_conts}>
        {/* 가입자 공지사항 */}
        <h3 className={style.myssg_sec_title}>자주찾는 메뉴</h3>
        <ul
          className={style.myssg_quick_list2}
          // data-react-tarea-cd="00040_000000791"
        >
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "좋아요"}]'
          >
            <Link
              href="https://m.ssg.com/myssg/myClip/main.ssg?_mpop=new"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_like} />
              <span className={style.myssg_quick_text}>좋아요</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "자주구매"}]'
          >
            <Link
              href="https://m.ssg.com/myssg/productMng/frequentlyOrderItem.ssg?_mpop=new"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_often} />
              <span className={style.myssg_quick_text}>자주구매</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "이벤트현황"}]'
          >
            <Link
              href="https://m.ssg.com/myssg/activityMng/eventEntryStatusList.ssg?_mpop=new"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_event} />
              <span className={style.myssg_quick_text}>이벤트현황</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "상품Q&amp;A"}]'
          >
            <Link
              href="https://m.ssg.com/myssg/activityMng/postngQna.ssg?_mpop=new"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_qna} />
              <span className={style.myssg_quick_text}>상품Q&amp;A</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "입고알림"}]'
          >
            <Link
              href="https://m.ssg.com/myssg/activityMng/itemNotiList.ssg?_mpop=new"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_noti} />
              <span className={style.myssg_quick_text}>입고알림</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "선물함"}]'
          >
            <Link
              href="https://pay.ssg.com/m/giftOrder/receiver/orderInfo.ssg"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_gift} />
              <span className={style.myssg_quick_text}>선물함</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "상품권전환"}]'
          >
            <Link
              href="https://member.ssg.com/m/myssg/ssgmoneyMng/giftSwapMain.ssg?_mpop=new"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_exchange} />
              <span className={style.myssg_quick_text}>상품권전환</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "알비백관리"}]'
          >
            <Link
              href="https://pay.ssg.com/m/myssg/orderInfoCoolerBagInfo.ssg?_mpop=new"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_bag} />
              <span className={style.myssg_quick_text}>알비백관리</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "배송지관리"}]'
          >
            <Link
              href="https://member.ssg.com/m/comm/shpplocList.ssg?_mpop=new"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_delivery} />
              <span className={style.myssg_quick_text}>배송지관리</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "정기배송관리"}]'
          >
            <Link
              href="https://pay.ssg.com/m/myssg/perdc-shpp-mng.ssg"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_regular_delivery} />
              <span className={style.myssg_quick_text}>
                정기배송
                <br />
                관리
              </span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "알림함"}]'
          >
            <Link
              // href="javascript:moveCsbot('https://talk.ssg.com/webchat/?sellerhomeId=&amp;siteNo=6005&amp;dvicDivCd=20&amp;gateType=seller');"
              href="https://m.ssg.com/"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_alert} />
              <span className={style.myssg_quick_text}>알림함</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "고객센터톡"}]'
          >
            <Link
              // href="javascript:moveCsbot('https://talk.ssg.com/webchat/?gateType=cs&amp;siteNo=6005');"
              href="https://m.ssg.com/"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_cs} />
              <span className={style.myssg_quick_text}>고객센터톡</span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "유니버스클럽"}]'
          >
            <Link
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_membership} />
              <span className={style.myssg_quick_text}>
                유니버스
                <br />
                클럽
              </span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "회원정보변경"}]'
          >
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/password.ssg"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_modify} />
              <span className={style.myssg_quick_text}>
                회원정보
                <br />
                변경
              </span>
            </Link>
          </li>
          <li
            data-react-unit-type="text"
            data-react-unit-id=""
            data-react-unit-text='[{"type":"text","value": "내정보관리"}]'
          >
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/main.ssg"
              className={`${style.myssg_quick_link} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              <i className={style.ty_manage} />
              <span className={style.myssg_quick_text}>내정보관리</span>
            </Link>
          </li>
        </ul>
        {/* 고객센터/email */}
        <div
          className={style.myssg_user_manage}
          data-react-tarea-cd="00040_000000791"
        >
          <Link
            href="https://m.ssg.com/customer/main.ssg?_mpop=new"
            data-react-unit-type="text"
            data-react-unit-text='[{"type":"tarea_addt_val","value": "고객센터"}]'
          >
            <span
              className={`${style.myssg_manage_text} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              고객센터
            </span>
            <span className="absolute w-px h-[13px] -translate-y-2/4 content-[''] right-0 top-2/4 bg-[#e5e5e5]" />
          </Link>
          <Link
            href="https://m.ssg.com/myssg/counselForm.ssg"
            data-react-unit-type="text"
            data-react-unit-text='[{"type":"tarea_addt_val","value": "email상담답변"}]'
          >
            <span
              className={`${style.myssg_manage_text} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
            >
              e-mail 상담/답변
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
