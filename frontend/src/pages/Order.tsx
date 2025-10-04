import { useEffect, useState } from "react";
import axios from "axios";

export default function Order() {
    const [items, setItems] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:3001/items").then((res) => {
      setItems(res.data);
      console.log("----------------")
      console.log(items);
    });
  }, []);

    type Category = {
        img: string;
        label: string;
        sub?: string[];
    };
    const orderCategory: Category[] = [
        {
            label: "Special",
            img: "sparkle.png",
            sub: ["All", "Afternoon Tea", "Specialty Gift", "Specialty Box"],
        },
        {
            label: "Mixed Boxes",
            img: "gift.png",
        },
        {
            label: "Cakes",
            img: "piece-cake.png",
            sub: ["All", "Whole", "Piece"],
        },
        {
            label: "Bread & Dough",
            img: "donut.png",
            sub: ["All", "Specialty Donut", "Classic Donut", "Brioche", "Loaf Bread"],
        },
        {
            label: "Desserts",
            img: "cookie.png",
            sub: ["All", "Choux", "Cookies", "Dacquoise"],
        },
        {
            label: "Meal",
            img: "meal.png",
        },
    ];

    const [clickNavLabel, setClickNavLabel] = useState(0);
    const handleNavLabel = (index: number) => {
        setSubLabel(0);
        setClickNavLabel(index);
    };

    const [currentSubLabel, setSubLabel] = useState<number | null>(0);
    const handleSubLabel = (index: number) => {
        setSubLabel(index);
    };

    return (
        <div className="w-full flex flex-col justify-start items-center">
            {/* banner */}
            <div className="w-full h-[600px] bg-[var(--light-yellow)] flex justify-center items-center">
                <div className="w-[1100px] h-full flex flex-col justify-center items-center gap-[40px]">
                    <p className="font-extrabold text-5xl">Online Order</p>
                    <div className="flex flex-col gap-[10px] text-center">
                        <p>* 예약 픽업 / 딜리버리 전용 (최소 하루 전, 일부 품목 이틀 전)</p>
                        <p>* 당일 픽업은 전화나 우버이츠를 이용하여 주문해 주세요</p>
                    </div>
                    <div className="flex gap-[20px]">
                        <a href="tel:+16048287476" className="sm:hidden btn-hover !px-[20px] !py-[12px] bg-white rounded-full">Call Us</a>
                        <a
                            href="https://www.ubereats.com/ca/store/unni-pastries-robson/5Uv2qPEYXhq2RDKjLOiFfQ?diningMode=DELIVERY&ps=1&surfaceName="
                            target="_blank"
                            className="btn-hover !px-[20px] !py-[12px] bg-white rounded-full hover:bg-green-600"
                        >
                            Use Uber Eats
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative w-full flex flex-col justify-center items-center gap-[20px]">
                <ul className="absolute top-[-100px] w-[1100px] flex justify-center gap-[30px]">
                    {orderCategory.map((category, index) => (
                        // 중괄호 아니고 괄호다 얘야
                        <li
                            onClick={() => handleNavLabel(index)}
                            key={index}
                            className={`${
                                clickNavLabel === index ? "bg-[#fff5e1]" : "bg-white"
                            } text-[var(--basic-yellow)] w-[130px] h-[160px] flex flex-col gap-[20px] justify-center items-center rounded-3xl border-1 !p-[10px] text-sm btn-hover`}
                        >
                            <img src={`/assets/logo/${category.img}`} width={"50px"} alt="" />
                            <p>{category.label}</p>
                        </li>
                    ))}
                </ul>

                <ul className="h-[160px] flex justify-center items-end gap-[20px]">
                    {orderCategory.map((category, index) =>
                        clickNavLabel === index
                            ? category.sub?.map((subMenu, subIdx) => (
                                  <li
                                      key={subIdx}
                                      onClick={() => handleSubLabel(subIdx)}
                                      className={`${
                                          currentSubLabel === subIdx ? "bg-black" : "bg-[var(--basic-yellow)]"
                                      } btn-hover text-sm !px-[15px] !py-[8px] text-white border-1 border-transparant rounded-3xl`}
                                  >
                                      {subMenu}
                                  </li>
                              ))
                            : null
                    )}
                </ul>
            </div>

            <div className="!m-[70px] flex flex-col gap-[50px]">
                {/* Afternoon tea */}
                <section className="flex flex-col gap-[10px]">
                    <p className="font-semibold text-lg">Afternoon Tea Dine In</p>
                    <div className="w-[150px] h-fit bg-white rounded-sm overflow-hidden">
                        <img src="/assets/platters/afternoon-dinein.webp" alt="" className="w-full h-[150px] object-cover" />
                        <div className="!pt-[10px]">
                            <p>Afternoon Tea Dine in 1 Person Reservation</p>
                            <p>CAD$65.00</p>
                        </div>
                    </div>
                </section>
                {/* boxes */}
                <section className="flex flex-col gap-[10px]">
                    <p className="font-semibold text-lg">Specialty Gift & Mixed Boxes</p>
                    <div>
                        <img src="/assets/platters/afternoon-dinein.webp" alt="" className="w-[100px] h-[100px] object-cover" />
                        <p>Afternoon Tea Dine in 1 Person Reservation</p>
                        <p>CAD$65.00</p>
                    </div>
                </section>
                {/* Whole cakes */}
                <section className="flex flex-col gap-[10px]">
                    <p className="font-semibold text-lg">Whole Cakes</p>
                    <div className="w-[1100px] flex flex-wrap gap-[20px]">
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/strawberry-cake.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Strawberry Cream Cake</p>
                                <p className="text-sm">CAD$40.00 - CAD$60.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/strawberry-macaron-cake.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Strawberry Cream Cake with Macaron & Flowers</p>
                                <p className="text-sm">CAD$60.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/chocolate-strawberry-cake.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Chocolate Strawberry Cake</p>
                                <p className="text-sm">CAD$40.00 - CAD$60.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/fraisier-cake.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Fraisier Cake</p>
                                <p className="text-sm">CAD$55.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/birthday-cake.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Birthday Cake</p>
                                <p className="text-sm">CAD$45.00 - CAD$65.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/earlgrey-buttercream-cake.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Earl Grey Flowers Buttercream Cake</p>
                                <p className="text-sm">CAD$45.00 - CAD$65.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/espresso-tiramisu.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Espresso Tiramisu 7"</p>
                                <p className="text-sm">CAD$50.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/matcha-tiramisu.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Matcha Tiramisu 7"</p>
                                <p className="text-sm">CAD$50.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/mango-tiramisu.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Mango Tiramisu 7"</p>
                                <p className="text-sm">CAD$50.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/oreo-cake.webp" alt="" className="w-full h-[150px] object-cover rounded-sm" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Oreo Cheesecake</p>
                                <p className="text-sm">CAD$50.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/berrycheese-cake.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Double Berry Cheesecake</p>
                                <p className="text-sm">CAD$50.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/pink-cake.webp" alt="" className="w-full h-[150px] object-cover rounded-sm" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Pink Ribbon Cake</p>
                                <p className="text-sm">CAD$45.00 - CAD$65.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/lemon-cake.webp" alt="" className="w-full h-[150px] object-cover" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Lemon Daisy Cake</p>
                                <p className="text-sm">CAD$45.00 - CAD$65.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/gender-cake.webp" alt="" className="w-full h-[150px] object-cover" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Baby Gender Reveal Cake</p>
                                <p className="text-sm">CAD$55.00 - CAD$75.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/slice-pound-cake.webp" alt="" className="w-full h-[150px] object-cover" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Pound Cake</p>
                                <p className="text-sm">CAD$55.00</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Piece Cakes */}
                <section className="flex flex-col gap-[10px]">
                    <p className="font-semibold text-lg">Piece Cakes</p>
                    <div className="flex gap-[20px] w-max">
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/piece-espresso.webp" alt="" className="w-full h-[150px] object-cover" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold text-[15px]">Espresso Tiramisu</p>
                                <p className="text-xs">CAD$8.95</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/piece-matcha.webp" alt="" className="w-full h-[150px] object-cover" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Matcha Tiramisu</p>
                                <p className="text-xs">CAD$8.95</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/piece-mango.webp" alt="" className="w-full h-[150px] object-cover" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Mango Tiramisu</p>
                                <p className="text-xs">CAD$8.95</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/piece-oreo.webp" alt="" className="w-full h-[150px] object-cover" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Oreo Cheesecake</p>
                                <p className="text-xs">CAD$8.50</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/slice-pound-cake.webp" alt="" className="w-full h-[150px] object-cover" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Pound Slice</p>
                                <p className="text-xs">CAD$4.75</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* individual */}
                <section className="flex flex-col gap-[10px]">
                    <p className="font-semibold text-lg">Individual Items</p>
                    <div className="w-[1100px] overflow-x-auto overflow-y-hidden no-scrollbar">
                        <div className="flex gap-[20px] w-max">
                            <div className="w-[150px] h-fit btn-hover">
                                <img
                                    src="/assets/pastreis/chocolate-choux.webp"
                                    alt=""
                                    className="w-full h-[150px] object-cover rounded-sm"
                                />
                                <div className="!pt-[10px] flex flex-col gap-[3px]">
                                    <p className="font-semibold">Choux</p>
                                    <p className="text-sm">CAD$4.75</p>
                                </div>
                            </div>
                            <div className="w-[150px] h-fit btn-hover">
                                <img
                                    src="/assets/pastreis/strawberry-donut.webp"
                                    alt=""
                                    className="w-full h-[150px] object-cover rounded-sm"
                                />
                                <div className="!pt-[10px] flex flex-col gap-[3px]">
                                    <p className="font-semibold">Specialty Donut</p>
                                    <p className="text-sm">CAD$4.75</p>
                                </div>
                            </div>
                            <div className="w-[150px] h-fit btn-hover">
                                <img
                                    src="/assets/pastreis/croquette.webp"
                                    alt=""
                                    className="w-full h-[150px] object-cover rounded-sm"
                                />
                                <div className="!pt-[10px] flex flex-col gap-[3px]">
                                    <p className="font-semibold">Classic Donut</p>
                                    <p className="text-sm">CAD$3.95</p>
                                </div>
                            </div>
                            <div className="w-[150px] h-fit btn-hover">
                                <img
                                    src="/assets/pastreis/redbean-brioche.webp"
                                    alt=""
                                    className="w-full h-[150px] object-cover rounded-sm"
                                />
                                <div className="!pt-[10px] flex flex-col gap-[3px]">
                                    <p>Brioche</p>
                                    <p>CAD$3.25~</p>
                                </div>
                            </div>
                            <div className="w-[150px] h-fit btn-hover">
                                <img
                                    src="/assets/pastreis/cream-loaf.webp"
                                    alt=""
                                    className="w-full h-[150px] object-cover rounded-sm"
                                />
                                <div className="!pt-[10px] flex flex-col gap-[3px]">
                                    <p>Loaf</p>
                                    <p>CAD$10.00~</p>
                                </div>
                            </div>
                            <div className="w-[150px] h-fit btn-hover">
                                <img
                                    src="/assets/pastreis/sparkle-cookie.jpg"
                                    alt=""
                                    className="w-full h-[150px] object-cover rounded-sm"
                                />
                                <div className="!pt-[10px] flex flex-col gap-[3px]">
                                    <p>Cookies</p>
                                    <p>CAD$2.75~</p>
                                </div>
                            </div>
                            <div className="w-[150px] h-fit btn-hover">
                                <img
                                    src="/assets/pastreis/matcha-dacquoise.webp"
                                    alt=""
                                    className="w-full h-[150px] object-cover rounded-sm"
                                />
                                <div className="!pt-[10px] flex flex-col gap-[3px]">
                                    <p>Dacquoise</p>
                                    <p>CAD$3.75</p>
                                </div>
                            </div>
                            <div className="w-[150px] h-fit btn-hover">
                                <img
                                    src="/assets/pastreis/ham-quiche.webp"
                                    alt=""
                                    className="w-full h-[150px] object-cover rounded-sm"
                                />
                                <div className="!pt-[10px] flex flex-col gap-[3px]">
                                    <p>Breakfast & Lunch</p>
                                    <p>CAD$3.95~</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
