const pricingData = {
	title: 'Cennik usług',
	subtitle: 'Biuro Rachunkowe OnLine',
	disclaimer: [
		'Przedstawiony poniżej cennik nie stanowi oferty w rozumieniu art. 66',
		'Kodeksu Cywilnego. Służy on do wyliczenia kosztów współpracy z biurem.',
		'Podane ceny usług są cenami brutto.',
	],
	sections: [
		{
			title: 'Podatkowa Księga Przychodów i Rozchodów oraz ryczałt',
			headers: ['Ilość dokumentów księgowych', 'Cena Ryczałt/ryczałt + VAT i JPK', 'Cena KPiR/KPiR plus VAT i JPK'],
			rows: [
				{ documents: 'Do 5 dokumentów', priceRyczalt: '160/170zł', priceKPiR: '160/170zł' },
				{ documents: 'Do 15 dokumentów', priceRyczalt: '190/200zł', priceKPiR: '190/200zł' },
				{ documents: 'Do 30 dokumentów', priceRyczalt: '250/290zł', priceKPiR: '260/300zł' },
				{ documents: 'Do 50 dokumentów', priceRyczalt: '300/350zł', priceKPiR: '350/400zł' },
				{ documents: 'Do 70 dokumentów', priceRyczalt: '500/550zł', priceKPiR: '550/600zł' },
				{ documents: 'Do 85 dokumentów', priceRyczalt: '700/750zł', priceKPiR: '750/800zł' },
				{ documents: 'Do 100 dokumentów', priceRyczalt: '900/950zł', priceKPiR: '950/1000zł' },
				{ documents: 'Kolejny dokument', priceRyczalt: '3/4zł szt.', priceKPiR: '3/4zł szt' },
			],
		},
		{
			title: 'Kadry i płace',
			headers: ['Rozliczenie', 'Cena'],
			rows: [
				{ service: 'Właściciel JDG', price: 'W cenie' },
				{ service: 'Pracownik umowa o pracę', price: '30zł os. za miesiąc' },
				{ service: 'Zleceniobiorca', price: '30zł os. za miesiąc' },
				{ service: 'Umowa o dzieło', price: '30zł os. za miesiąc' },
				{ service: 'Wspólnik spółki cywilnej', price: '30zł os. za miesiąc' },
				{ service: 'Założenie akt', price: '20zł os. za miesiąc' },
				{ service: 'Sporządzenie PIT 11', price: '30zł/szt' },
				{ service: 'Sporządzenie zaświadczenia dla pracownika', price: '10zł/szt' },
				{ service: 'Rejestracja do PFRON', price: '50zł' },
				{ service: 'Sporządzenie wniosku o refundację', price: '50zł' },
				{ service: 'PFRON', price: '' },
				{ service: 'Sporządzenie umowy o pracę', price: '30zł' },
				{ service: 'Wystawienie świadectwa pracy', price: '30zł' },
				{ service: 'Sporządzenie umowy zlecenia', price: '30zł' },
				{ service: 'Zaświadczenie o zarobkach dla zleceniobiorcy', price: '10zł' },
				{ service: 'Sporządzenie umowy o dzieło', price: '30zł' },
				{ service: 'Zgłoszenie RUD', price: '30zł' },
				{ service: 'Zgłoszenie do ZUS/ Wyrejestrowanie z ZUS', price: '10zł/w cenie' },
				{ service: 'Naliczanie PPK lista płac', price: '20zł os.' },
				{ service: 'Odliczanie zajęć komorniczych lista płac', price: '10zł/szt' },
				{ service: 'Inne nie wymienione odliczenia i naliczenia', price: '20zł' },
				{ service: 'Korekta deklaracji, naliczenie i zgłoszenie z winy klienta', price: '50zł' },
				{ service: 'Sporządzenie wniosku o zasiłek opiekuńczy', price: '30zł' },
				{ service: 'Sporządzenie wniosku o zasiłek chorobowy', price: '30zł' },
				{ service: 'Sporządzenie wniosku o urlop macierzyński', price: '30zł' },
				{ service: 'Sporządzenie wniosku o urlop tacierzyński', price: '30zł' },
				{ service: 'Sporządzenie deklaracji ZUS IWA', price: '50zł' },
			],
		},
		{
			title: 'Pozostałe usługi',
			headers: ['Usługa', 'Cena'],
			rows: [
				{
					service:
						'Prowadzenie działalności nierejestrowanej (prowadzenie ewidencji, pilnowanie progów przychodowych, złożenie deklaracji rocznej)',
					price: '80 zł za miesiąc',
				},
				{ service: 'Pomoc w założeniu JDG', price: 'Gratis' },
				{ service: 'Przechowywanie dokumentacji', price: 'W cenie' },
				{ service: 'Przechowywanie dokumentacji po zakończeniu współpracy', price: '30zł za miesiąc' },
				{ service: 'Roczne zeznanie podatkowe właściciela', price: 'W cenie' },
				{
					service:
						'Roczne zeznanie podatkowe właściciela zawierające dodatkowe dokumenty (np. rozliczenie z małżonkiem, ulgi etc. nie będące w posiadaniu biura)',
					price: '10zł za każdy dodatkowy dokument',
				},
				{
					service: 'Roczne zeznanie podatkowe osoby indywidualnej',
					price: '50zł za osobę/ 70zł rozliczenie wspólne z małżonkiem',
				},
				{ service: 'Ulga IP BOX ( prowadzenie ewidencji + rozliczenie roczne)', price: '70zł/miesiąc' },
				{ service: 'Wniosek o wydanie zaświadczenia z US/ZUS', price: '20zł sztuka' },
				{ service: 'Pismo o niezaleganiu z US/ZUS', price: '20zł sztuka' },
				{ service: 'Sporządzenie deklaracji VAT9M za klienta bez VAT', price: '30zł sztuka' },
				{ service: 'Sporządzenie deklaracji VAT8 za klienta bez VAT', price: '30zł sztuka' },
				{ service: 'Sporządzenie/aktualizacja VAT R', price: '30zł sztuka' },
				{ service: 'Sporządzenie faktury w imieniu klienta', price: '10zł sztuka' },
				{ service: 'Sporządzenie noty korygującej w imieniu klienta', price: '10zł sztuka' },
				{ service: 'Sporządzenie wezwania do zapłaty w imieniu klienta', price: '10zł sztuka' },
				{
					service: 'Wystawienie wezwania do zapłaty dla klienta, który nie rozlicza się z biurem terminowo',
					price: '15zł sztuka',
				},
				{ service: 'Korekta deklaracji z winy klienta', price: '50zł' },
				{ service: 'Złożenie zaległej deklaracji', price: '50zł' },
				{ service: 'Korekta raportów w ZUS', price: '30zł sztuka' },
				{ service: 'Sporządzenie sprawozdań dla banku, do ubezpieczenia etc.', price: '40zł sztuka' },
				{ service: 'Sprawozdanie do GUS', price: '30zł za godzinę' },
				{ service: 'Aktualizacja wpisu w CEiDG', price: 'W cenie' },
				{ service: 'Pismo wyjaśniające do US/ZUS etc.', price: '30zł za godzinę' },
				{ service: 'JPK KPiR na żądanie US', price: '50zł' },
				{ service: 'Korekta JPK', price: '40zł' },
				{ service: 'Wniosek A1', price: '100zł' },
				{ service: 'Rozliczenie wniosku A1', price: '100zł' },
				{ service: 'Usługi świadczone w święta i dni wolne', price: '80 zł za godzinę' },
				{ service: 'Usługi świadczone po godzinach pracy', price: '50 zł za godzinę' },
				{ service: 'Usługi wykraczające poza cennik', price: 'Od 50zł za godzinę (cena ustalana indywidualnie)' },
				{
					service:
						'Zerwanie współpracy w ciągu 2 miesięcy ( wdrożenie, baza klientów i wstępne przygotowanie dokumentów)',
					price: '150zł',
				},
			],
		},
	],
}

export default pricingData
