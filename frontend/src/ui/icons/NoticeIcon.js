import { colors } from "../../assets/style/tokens/colors";

export default function NoticeIcon({ type = "list", size }) {
    let icon = null;

    if (type === "list") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path
                    d="M17 15H14C13.7348 15 13.4804 15.1054 13.2929 15.2929C13.1054 15.4804 13 15.7348 13 16V32C13 32.2652 13.1054 32.5196 13.2929 32.7071C13.4804 32.8946 13.7348 33 14 33H30C30.2652 33 30.5196 32.8946 30.7071 32.7071C30.8946 32.5196 31 32.2652 31 32V16C31 15.7348 30.8946 15.4804 30.7071 15.2929C30.5196 15.1054 30.2652 15 30 15H27M26.896 17C27.516 13.95 25.108 11 21.996 11C18.886 11 16.478 13.95 17.096 17H26.896Z"
                    stroke={colors.orange.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M21 23H27M21 28H27" stroke={colors.orange.normal.base} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 22H18V24.3333H16V22ZM16 26.6667H18V29H16V26.6667Z" fill={colors.orange.normal.base} />
            </>
        );
    } else if (type === "news") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path
                    d="M33 17.7143V28.8571C33 29.4255 32.7771 29.9705 32.3804 30.3724C31.9837 30.7742 31.4457 31 30.8846 31M30.8846 31C30.3236 31 29.7855 30.7742 29.3888 30.3724C28.9921 29.9705 28.7692 29.4255 28.7692 28.8571V13.8571C28.7692 13.6298 28.6801 13.4118 28.5214 13.2511C28.3627 13.0903 28.1475 13 27.9231 13H11.8462C11.6217 13 11.4065 13.0903 11.2478 13.2511C11.0891 13.4118 11 13.6298 11 13.8571V29.2857C11 29.7404 11.1783 30.1764 11.4957 30.4979C11.813 30.8194 12.2435 31 12.6923 31H30.8846Z"
                    stroke={colors.orange.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M16 26.7142H23.7143M23.7143 17.2856H16V21.5714H23.7143V17.2856Z" stroke={colors.orange.normal.base} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "pen") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path
                    d="M23.1 31.9009H31.9001M32.0915 16.2937C32.3795 16.0058 32.6079 15.664 32.7638 15.2878C32.9197 14.9116 32.9999 14.5084 33 14.1012C33.0001 13.694 32.9199 13.2908 32.7641 12.9146C32.6083 12.5383 32.38 12.1965 32.0921 11.9085C31.8042 11.6205 31.4624 11.3921 31.0862 11.2362C30.71 11.0803 30.3068 11.0001 29.8996 11C29.4924 10.9999 29.0892 11.0801 28.7129 11.2359C28.3367 11.3917 27.9949 11.62 27.7069 11.9079L13.0261 26.5922C12.7707 26.8468 12.5819 27.1604 12.4761 27.5052L11.023 32.2925C10.9946 32.3876 10.9925 32.4887 11.0168 32.5849C11.0412 32.6812 11.0911 32.7691 11.1614 32.8392C11.2317 32.9094 11.3196 32.9592 11.4159 32.9834C11.5122 33.0076 11.6132 33.0053 11.7083 32.9767L16.4967 31.5247C16.8412 31.4199 17.1547 31.2322 17.4097 30.978L32.0915 16.2937Z"
                    stroke={colors.orange.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </>
        );
    } else if (type === "heart") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill="none" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none">
            {icon}
        </svg>
    );
}
