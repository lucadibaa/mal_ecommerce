import asusRogBanner1 from '../../images/asusRogBanner1.jpg'

const Banner = () => {
    return (
        <div className="bg-black rounded-xl">
            <img src={asusRogBanner1} className="h-36 rounded-xl object-cover" alt="banner" />
        </div>
    )
}

export default Banner
