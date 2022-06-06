import classNames from "classnames/bind";

import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faSun, faUser } from "@fortawesome/free-regular-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { MailboxIcon, PlaneIcon, UploadIcon } from "~/components/Icons";



import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import images from "~/assets/images";
import Image from "~/components/Image";
import styles from "./Header.module.scss";
import Search from "../Search";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback & Help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard Shortcut",
    },
]

function Header() {
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "Xem hồ sơ",
            to: "/@user",
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: "Nhận xu",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faSun} />,
            title: "Cài đặt",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOutAlt} />,
            title: "Log out",
            to: "/logout",
            seperate: true,
        },
    ]



    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case "language":

                break;
            default:
        }
    }


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logoo" />
                </div>
                <Search />

                <div className={cx('action')}>
                    {currentUser
                        ? (
                            <>
                                <Tippy content="Upload" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <PlaneIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="Message box" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MailboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>

                            </>
                        )
                        : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Log in</Button>


                            </>
                        )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser
                            ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src={images.fakeAvt}
                                    alt="user avatar"
                                />
                            )
                            : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                    </Menu>
                </div>

            </div>
        </header>
    );
}

export default Header;