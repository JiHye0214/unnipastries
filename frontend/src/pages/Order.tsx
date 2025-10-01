import { useState } from "react";

export default function Order() {
    const orderNavLabel: string[] = [
        "All",
        "Afternoon Tea Dine In",
        "Specialty Gift & Mixed Boxes",
        "Whole & Piece Cakes",
        "Individual Items",
    ];
    const [clickNavLabel, setClickNavLabel] = useState(0);
    const handleNavLabel = (index: number) => {
        setClickNavLabel(index);
    };

    return (
        <div className="!mt-[20px] w-full flex flex-col justify-start items-center">
            <nav className="sticky top-0 w-full h-[60px] bg-[var(--grey-brown)] flex justify-center items-center gap-[20px]">
                {orderNavLabel.map((label, index) => (
                    // 중괄호 아니고 괄호다 얘야
                    <div
                        onClick={() => handleNavLabel(index)}
                        key={index}
                        className={`${
                            clickNavLabel === index ? "text-white" : "text-[var(--basic-yellow)]"
                        } !px-[15px] font-semibold btn-hover`}
                    >
                        {label}
                    </div>
                ))}
            </nav>
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
                    <div className="w-[1200px] flex flex-wrap gap-[20px]">
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
                            <img src="/assets/cakes/lemon-cake.webp" alt="" className="w-full h-[150px] object-cover rounded-sm" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Lemon Daisy Cake</p>
                                <p className="text-sm">CAD$45.00 - CAD$65.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/gender-cake.webp" alt="" className="w-full h-[150px] object-cover rounded-sm" />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Baby Gender Reveal Cake</p>
                                <p className="text-sm">CAD$55.00 - CAD$75.00</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img src="/assets/cakes/slice-pound-cake.webp" alt="" className="w-full h-[150px] object-cover rounded-sm" />
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
                            <img
                                src="/assets/cakes/piece-espresso.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Espresso Tiramisu</p>
                                <p className="text-sm">CAD$8.95</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/piece-matcha.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Matcha Tiramisu</p>
                                <p className="text-sm">CAD$8.95</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/piece-mango.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Mango Tiramisu</p>
                                <p className="text-sm">CAD$8.95</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/piece-oreo.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Oreo Cheesecake</p>
                                <p className="text-sm">CAD$8.50</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-fit btn-hover">
                            <img
                                src="/assets/cakes/piece-pound.webp"
                                alt=""
                                className="w-full h-[150px] object-cover rounded-sm"
                            />
                            <div className="!pt-[10px] flex flex-col gap-[3px]">
                                <p className="font-semibold">Pound Slice</p>
                                <p className="text-sm">CAD$4.75</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* individual */}
                <section className="flex flex-col gap-[10px]">
                    <p className="font-semibold text-lg">Individual Items</p>
                    <div className="w-[1200px] overflow-x-auto overflow-y-hidden no-scrollbar">
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
