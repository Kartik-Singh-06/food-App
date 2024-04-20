
import { useState, useEffect } from 'react'

const useRestroMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    const [menuInfo, setMenuInfo] = useState(null)
    useEffect(() => {
        fetchRestaurantMenu();
    }, [])
    async function fetchRestaurantMenu() {
        const resource = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=" + DEFAULT_LAT + "&lng=" + DEFAULT_LNG + "&restaurantId=" + resId ;
        const data = await fetch(resource);
        const json = await data.json()

        const restaurantInfo = json?.data?.cards[0]?.card?.card?.info
        setResInfo(restaurantInfo)
        
        let card = json?.data?.cards?.find(card=>card.groupedCard)
        let menuCards = card?.groupedCard?.cardGroupMap?.REGULAR?.cards
        const menu = menuCards?.filter(card => card.card.card.itemCards !== undefined)
        setMenuInfo(menu)
    }
    return { restaurantInfo: resInfo, menuInfo }
}

export default useRestroMenu;