import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Пополнить банковской картой</h2>}
        >
            <Head title="Пополнить банковской картой" />

            <div className="py-10">
                <div className="max-w-[550px] mx-auto bg-white overflow-hidden shadow-sm sm:rounded-lg p-[40px]">
                    <div className="text-gray-900 font-semibold text-[24px] mb-3">Пополнить банковской картой</div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="price1" className="form-label text-[12px] text-gray-700">УКАЖИТЕ СУММУ</label><br></br>
                            <input type="number" className="form-control rounded-l-lg w-[144px] h-[52px] bg-[#FAFAFC] border-gray-200 mt-1" id="price1"
                                   placeholder="0000.00  $"/>
                            <input type="number" className="form-control rounded-r-lg w-[144px]  h-[52px] bg-[#FAFAFC] border-l-0 border-gray-200" id="price1"
                                   placeholder="0000.00  Р"/>
                        </div>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
