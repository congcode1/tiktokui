import classNames from "classnames/bind";

import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faMessage,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faSun, faUser } from "@fortawesome/free-regular-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { MailboxIcon, PlaneIcon, UploadIcon } from "~/components/Icons";


import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import images from "~/assets/images";
import Image from "~/components/Image";
import styles from "./Header.module.scss";
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
    const [searchResult, setSearchResult] = useState([]);
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

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000)
    }, [])

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case "language":

                break;
            default:
        }
    }
    const handleSearchInputChange = (e) => {
        e.currentTarget.value
            ? setSearchResult([1, 2, 3])
            : setSearchResult([])
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logoo" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false}
                            onChange={e => handleSearchInputChange(e)}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

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