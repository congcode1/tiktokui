import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/51faeb2beb46a239fccc193230a4259b~c5_300x300.webp?x-expires=1654174800&x-signature=bmmd61QPqS%2BMFizcvTndc7s1RmI%3D" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Thanh Cong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ntczaq1@3</span>
            </div>
        </div>
    );
}

export default AccountItem;