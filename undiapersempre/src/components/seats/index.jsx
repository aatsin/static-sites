import React, { useState, useCallback, useMemo, memo } from 'react';
import { DecorativeBorder, DecorativeCorner, DecorativeTitle, DecorativeButton, DecorativeSecondaryTitle } from '../decorative';

const Seat = memo(({ seatNumber, isSelected, onSelect, isDisabled = false }) => {
    const selectedClasses = isSelected
        ? 'bg-gatsby-gold-300 hover:bg-gatsby-gold-400'
        : 'bg-gatsby-artdeco-700 hover:bg-gatsby-artdeco-500'
    return (
        <div className="w-5 h-5 md:w-10 md:h-10 m-0 p-0 relative group">
            <button
                className={`
                    w-full h-full transition-all duration-200 cursor-pointer
                    ${isDisabled
                        ? 'bg-gatsby-artdeco-700 cursor-not-allowed opacity-50'
                        : selectedClasses
                    }
                `}
                onClick={() => !isDisabled && onSelect(seatNumber)}
                disabled={isDisabled}
                aria-label={`Seat ${seatNumber}${isDisabled ? ' (Reserved)' : ''}`}
                aria-pressed={isSelected}
            />
            {/* Decorative corner elements */}
            <div className={`absolute top-0 left-0 w-1 h-1 md:w-2 md:h-2 border-t border-l ${isDisabled ? 'border-gatsby-champagne-700 opacity-50' :
                !isSelected ? 'border-gatsby-champagne-600' :
                    'border-gatsby-champagne-800 top-[2px] left-[2px]'
                }`}></div>
            <div className={`absolute top-0 right-0 w-1 h-1 md:w-2 md:h-2 border-t border-r ${isDisabled ? 'border-gatsby-champagne-700 opacity-50' :
                !isSelected ? 'border-gatsby-champagne-600' :
                    'border-gatsby-champagne-800 top-[2px] right-[2px]'
                }`}></div>
            <div className={`absolute bottom-0 left-0 w-1 h-1 md:w-2 md:h-2 border-b border-l ${isDisabled ? 'border-gatsby-champagne-700 opacity-50' :
                !isSelected ? 'border-gatsby-champagne-600' :
                    'border-gatsby-champagne-800 bottom-[2px] left-[2px]'
                }`}></div>
            <div className={`absolute bottom-0 right-0 w-1 h-1 md:w-2 md:h-2 border-b border-r ${isDisabled ? 'border-gatsby-champagne-700 opacity-50' :
                !isSelected ? 'border-gatsby-champagne-600' :
                    'border-gatsby-champagne-800 bottom-[2px] right-[2px]'
                }`}></div>
        </div>
    );
});

const SeatGroup = memo(({ seats, rowIndex, groupIndex, selectedSeats, onSelect, disabledSeats }) => {
    const seatNumbers = useMemo(() =>
        seats.map((_, seatIndex) => ({
            seatNumber: (rowIndex * 100) + (groupIndex * 10) + seatIndex + 1,
            seatIndex
        })), [seats, rowIndex, groupIndex]);

    return (
        <div className="flex justify-center items-center gap-x-2 gap-y-4 md:gap-4">
            {seatNumbers.map(({ seatNumber, seatIndex }) => {
                const disabledGroup = disabledSeats[rowIndex]?.[groupIndex];
                const isDisabled = disabledGroup && seatIndex in disabledGroup;
                return (
                    <Seat
                        key={seatNumber}
                        seatNumber={seatNumber}
                        isSelected={selectedSeats[seatNumber] ?? false}
                        onSelect={onSelect}
                        isDisabled={isDisabled}
                    />
                );
            })}
        </div>
    );
});

const SeatRow = memo(({ groups, rowIndex, selectedSeats, onSelect, disabledSeats }) => {
    return (
        <div className="flex justify-center gap-5 md:gap-8">
            {groups.map((group, groupIndex) => (
                <SeatGroup
                    key={groupIndex}
                    seats={group}
                    rowIndex={rowIndex}
                    groupIndex={groupIndex}
                    selectedSeats={selectedSeats}
                    onSelect={onSelect}
                    disabledSeats={disabledSeats}
                />
            ))}
        </div>
    );
});

const Legend = memo(() => {
    return (
        <div className="mt-8 flex justify-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gatsby-artdeco-700 relative">
                    <div className="absolute inset-0 border border-gatsby-champagne-600"></div>
                </div>
                <span className="text-gatsby-pearl-500">Disponible</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gatsby-gold-200 relative">
                    <div className="absolute inset-0 border border-gatsby-champagne-800"></div>
                </div>
                <span className="text-gatsby-pearl-500">Seleccionat</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gatsby-artdeco-700 relative">
                    <div className="absolute inset-0 border border-gatsby-champagne-700 opacity-50"></div>
                </div>
                <span className="text-gatsby-pearl-500">Reservat</span>
            </div>
        </div>
    );
});

export const SeatMatrix = memo(({ rows, selectedSeats, onSeatSelect, disabledSeats = [], handleConfirmSeats }) => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="text-center mb-6 relative">
                <DecorativeSecondaryTitle
                    title="Selecciona les teves places"
                    className="mb-10"
                />
            </div>

            <div className="mb-8">
                <div className="text-gatsby-pearl-500 font-serif font-bold text-2xl text-center mb-3 tracking-wide">
                    ESCENARI
                </div>
                <div className="relative h-6">
                    <div className="absolute inset-0">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-gatsby-gold-400 to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="space-y-1 md:space-y-3 relative">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="mb-3">
                        <SeatRow
                            groups={row}
                            rowIndex={rowIndex}
                            selectedSeats={selectedSeats}
                            onSelect={onSeatSelect}
                            disabledSeats={disabledSeats}
                        />
                    </div>
                ))}
            </div>

            <Legend />

            <div className='flex justify-center items-center mt-7 mb-10'>
                <DecorativeButton
                    onClick={handleConfirmSeats}
                    ariaLabel="Confirmar selecció de places"
                >
                    Confirmar
                </DecorativeButton>
            </div>
        </div>
    );
});

export default function Seats({ onConfirmSeats }) {
    const [selectedSeats, setSelectedSeats] = useState({});

    const handleSeatSelect = useCallback((seatNumber) => {
        setSelectedSeats(prev => ({
            ...prev,
            [seatNumber]: !prev[seatNumber]
        }));
    }, []);

    const handleConfirmSeats = useCallback(() => {
        onConfirmSeats(Object.values(selectedSeats).filter(Boolean));
    }, [selectedSeats]);

    const vipRowLenght = 3;
    const inviteesRowLenght = 6;

    const seatRows = useMemo(() => [
        [[...Array(vipRowLenght).keys()], [...Array(vipRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
    ], [vipRowLenght, inviteesRowLenght]);

    const disabledSeats = useMemo(() => [
        [[...Array(vipRowLenght).keys()], [...Array(vipRowLenght).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[, , ...Array(3).keys()], [...Array(3).keys()]],
        [[...Array(inviteesRowLenght).keys()], [...Array(inviteesRowLenght).keys()]],
        [[, , , , ...Array(2).keys()], [...Array(inviteesRowLenght).keys()]],
    ], [vipRowLenght, inviteesRowLenght]);

    return (
        <SeatMatrix
            rows={seatRows}
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
            disabledSeats={disabledSeats}
            handleConfirmSeats={handleConfirmSeats}
        />
    );
}
