import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Dashboard({ auth }) {

    const { data, setData, post, reset, processing, errors } = useForm({
        price: '',
        card: '',
        cardDataM: '',
        cardDataY: '',
        cardCVC: '',
        users_name: '',
    })

    const { cards } = usePage().props;

    function submit(e) {
        e.preventDefault()
        post('/payment')
        reset()
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Пополнить банковской картой</h2>}
        >
            <Head title="Пополнить банковской картой"/>
            <div className="py-10">
                <div className="max-w-[550px] mx-auto bg-white overflow-hidden shadow-sm sm:rounded-lg p-[40px]">
                    <div className="text-gray-900 font-semibold text-[24px] mb-3">Пополнить банковской картой</div>
                    <div>Cards:</div>
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="price1" className="form-label text-[12px] text-gray-700">УКАЖИТЕ
                                СУММУ</label><br></br>
                            <input type="number"
                                   className="form-control rounded-l-lg w-[144px] h-[52px] bg-[#FAFAFC] border-gray-200 mt-1"
                                   id="price1"
                                   placeholder="0000.00  $"/>
                            <input type="number"
                                   className="form-control rounded-r-lg w-[144px]  h-[52px] bg-[#FAFAFC] border-l-0 border-gray-200"
                                   id="price2" name="price" value={ data.price }
                                   onChange={e => setData('price', e.target.value)}
                                   placeholder="0000.00  Р"/>
                        </div>
                        <div className="flex gap-2">
                            {cards.map( (card) => {if(card.users_name === auth.user.id) return <div className="shadow-sm bg-blue-400  rounded-lg w-[124px] h-[88px] mt-5"><p className="pt-8 pl-3 text-white"> ••••
                                {card.card.slice(-4)}</p>
                            <p className="text-white ml-3">{card.cardDataM} / {card.cardDataY.toString().slice(-2)}</p>
                            </div> } )}

                            <div
                                className="shadow-sm border-2 border-blue-400  rounded-lg w-[124px] h-[88px] bg-gray-200 mt-5">
                                <p className="text-center text-3xl text-gray-500 mt-1">+</p>
                                <p className="text-center font-semibold text-gray-500">Новая карта</p>
                            </div>
                        </div>
                        <div className="flex mt-5 relative">
                            <div className="card1 bg-blue-400 w-[324px] h-[208px] rounded-xl z-10 px-5 pt-10">
                                <label htmlFor="card" className="form-label text-[12px] text-gray-100">НОМЕР
                                    КАРТЫ</label><br></br>
                                <input type="text" maxLength="16" minLength="16" required
                                       pattern="[0-9\s]{13,19}"
                                       className="form-control rounded-lg w-[284px] h-[38px] bg-[#FAFAFC] border-gray-200 mt-1 mb-3"
                                       id="card" name="card"
                                       value={data.card} onChange={e => setData('card', e.target.value)}
                                       placeholder="Номер карты"/>
                                <label htmlFor="cardDataM" className="form-label text-[12px] text-gray-100">ДЕЙСТВУЕТ
                                    ДО</label><br></br>
                                <input type="number" max="12" maxLength="2"
                                       className="form-control rounded-lg w-[72px] h-[38px] bg-[#FAFAFC] border-gray-200 mt-1"
                                       id="cardDataM" name="cardDataM"
                                       value={data.cardDataM} onChange={e => setData('cardDataM', e.target.value)}
                                       placeholder="ММ"/>
                                <h2 className="inline-block mx-1 text-gray-100">/</h2>
                                <input type="number" min="2023" maxLength="4"
                                       className="form-control rounded-lg w-[72px] h-[38px] bg-[#FAFAFC] border-gray-200 mt-1"
                                       id="cardDataY" name="cardDataY"
                                       value={data.cardDataY} onChange={e => setData('cardDataY', e.target.value)}
                                       placeholder="ГГ"/>
                            </div>
                            <div
                                className="card1 bg-gray-200  w-[156px] h-[200px] rounded-xl rounded-l-none absolute left-[310px] top-1">
                                <div className="w-[156px] h-[40px] bg-gray-300 mt-6"></div>
                                <p className="text-gray-500 text-[12px] ml-7 mt-2">CVV/CVC</p>
                                <input type="number" max="999" maxLength="3"
                                       className="form-control rounded-lg w-[72px] h-[38px] bg-[#FAFAFC] border-gray-200 ml-8 mt-2"
                                       id="cardCVC" name="cardCVC"
                                       value={data.cardCVC} onChange={e => setData('cardCVC', e.target.value)}
                                       placeholder="000"/><br></br>
                                <label htmlFor="cardCVC"
                                       className="block form-label text-[10px] text-gray-400 ml-8 mt-1 w-30">три
                                    цифры<br></br>с обратной стороны<br></br>карты</label>
                            </div>
                        </div>
                        <input type="hidden" name="users_name" value={data.users_name = auth.user.id}/>
                        <input type="checkbox" name="isCardSave"
                               className="inline-block mt-[-43px] rounded-sm border-2 border-blue-400"/>
                        <p className="inline-block text-[14px] text-gray-700 ml-2 mt-5">Запомнить эту карту. Это
                            безопасно.
                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                 height="16" fill="gray"
                                 className="bi bi-exclamation-circle inline-block ml-2"
                                 viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path
                                    d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                            </svg>
                            <br></br>
                            Сохраняя карту, вы соглашаетесь с <a href="#" className="text-blue-500">условиями привязки
                                карты.</a>
                        </p>
                        <button className="bg-blue-400 rounded-3xl w-[141px] h-[52px] font-semibold text-white mt-4"
                                type="submit">Оплатить
                        </button>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
