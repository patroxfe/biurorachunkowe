const Privacy = () => {
	return (
		<div className='pt-48 pb-32 bg-secondBg'>
			<div className='wrapper px-4'>
				<h1 className='text-4xl font-semibold text-brownMain text-center mb-12'>Polityka Prywatności</h1>

				<div className='max-w-4xl mx-auto text-gray-800 space-y-8'>
					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>1. Informacje ogólne</h2>
						<p className='mb-2'>
							1. Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: biurorachunkoweonline.pl
						</p>
						<p className='mb-2'>
							2. Operatorem serwisu oraz Administratorem danych osobowych jest: Ewa Reluga Wybickiego 4/42, Grójec
						</p>
						<p className='mb-2'>3. Adres kontaktowy poczty elektronicznej operatora: ewa.reluga@outlook.com</p>
						<p className='mb-2'>
							4. Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w
							Serwisie.
						</p>

						<p className='mb-2'>5. Serwis wykorzystuje dane osobowe w następujących celach:</p>
						<ul className='list-disc pl-6 mb-2'>
							<li>Prowadzenie newslettera</li>
							<li>Obsługa zapytań przez formularz</li>
						</ul>

						<p className='mb-2'>
							6. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
						</p>
						<ul className='list-disc pl-6 mb-2'>
							<li>
								Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.
							</li>
							<li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka").</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>
							2. Wybrane metody ochrony danych stosowane przez Operatora
						</h2>

						<p className='mb-2'>
							1. Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL).
							Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
							użytkownika i mogą być odczytane jedynie na docelowym serwerze.
						</p>
						<p className='mb-2'>
							2. Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki sposób, że jedynie posiadający
							Operator klucz może je odczytać. Dzięki temu dane są chronione na wypadek wykradzenia bazy danych z
							serwera.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>3. Hosting</h2>
						<p className='mb-2'>1. Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: Hostinger</p>
						<p className='mb-2'>
							2. Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera.
							Zapisowi mogą podlegać:
						</p>
						<ul className='list-disc pl-6'>
							<li>zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</li>
							<li>czas nadejścia zapytania,</li>
							<li>czas wysłania odpowiedzi,</li>
							<li>nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
							<li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
							<li>
								adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do
								Serwisu nastąpiło przez odnośnik,
							</li>
							<li>informacje o przeglądarce użytkownika,</li>
							<li>informacje o adresie IP,</li>
							<li>
								informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na
								stronie,
							</li>
							<li>
								informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez
								Operatora.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>
							4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
						</h2>
						<p className='mb-2'>
							1. W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli
							będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
							Administratorze. Dotyczy to takich grup odbiorców:
						</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>firma hostingowa na zasadzie powierzenia</li>
						</ul>

						<p className='mb-2'>
							2. Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania
							związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W
							odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
						</p>

						<p className='mb-2'>3. Przysługuje Ci prawo żądania od Administratora:</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>dostępu do danych osobowych Ciebie dotyczących,</li>
							<li>ich sprostowania,</li>
							<li>usunięcia,</li>
							<li>ograniczenia przetwarzania,</li>
							<li>oraz przenoszenia danych.</li>
						</ul>

						<p className='mb-2'>
							4. Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec
							przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez
							Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku
							istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw
							i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.
						</p>

						<p className='mb-2'>
							5. Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki
							2, 00-193 Warszawa.
						</p>

						<p className='mb-2'>6. Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</p>

						<p className='mb-2'>
							7. W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu
							decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez
							Administratora marketingu bezpośredniego.
						</p>

						<p className='mb-2'>
							8. Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych.
							Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>5. Informacje w formularzach</h2>

						<p className='mb-2'>
							1. Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one
							podane.
						</p>
						<p className='mb-2'>
							2. Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).
						</p>
						<p className='mb-2'>
							3. Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z
							adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się
							wewnątrz adresu url strony zawierającej formularz.
						</p>
						<p className='mb-2'>
							4. Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w
							celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp.
							Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>6. Logi Administratora</h2>
						<p>
							1. Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu
							administrowania serwisem.
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>7. Istotne techniki marketingowe</h2>
						<p>
							1. Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z
							siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie
							zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W
							zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może
							przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia:{' '}
							<a href='https://www.google.com/ads/preferences/' className='text-brownMain hover:underline'>
								https://www.google.com/ads/preferences/
							</a>
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>8. Informacja o plikach cookies</h2>
						<p className='mb-2'>1. Serwis korzysta z plików cookies.</p>
						<p className='mb-2'>
							2. Pliki cookies (tzw. „ciasteczka") stanowią dane informatyczne, w szczególności pliki tekstowe, które
							przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron
							internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas
							przechowywania ich na urządzeniu końcowym oraz unikalny numer.
						</p>
						<p className='mb-2'>
							3. Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do
							nich dostęp jest operator Serwisu.
						</p>

						<p className='mb-2'>4. Pliki cookies wykorzystywane są w następujących celach:</p>
						<ul className='list-disc pl-6 mb-2'>
							<li>
								utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej
								podstronie Serwisu ponownie wpisywać loginu i hasła;
							</li>
							<li>realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</li>
						</ul>

						<p className='mb-2'>
							5. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne" (session cookies) oraz
							„stałe" (persistent cookies). Cookies „sesyjne" są plikami tymczasowymi, które przechowywane są w
							urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia
							oprogramowania (przeglądarki internetowej). „Stałe" pliki cookies przechowywane są w urządzeniu końcowym
							Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez
							Użytkownika.
						</p>

						<p className='mb-2'>
							6. Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie
							dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą
							dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies.
							Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera
							pomoc lub dokumentacja przeglądarki internetowej.
						</p>

						<p className='mb-2'>
							7. Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach
							internetowych Serwisu.
						</p>

						<p className='mb-2'>
							8. Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również
							przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z
							siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
						</p>
					</section>

					<section>
						<h2 className='text-2xl font-semibold text-brownMain mb-4'>
							9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
						</h2>
						<p className='mb-4'>
							1. Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy,
							że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania
							preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron
							www
						</p>

						<p className='mb-2'>
							2. W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz
							i postępuj zgodnie z instrukcjami:
						</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Edge
								</a>
							</li>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Internet Explorer
								</a>
							</li>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Chrome
								</a>
							</li>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Safari
								</a>
							</li>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Firefox
								</a>
							</li>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Opera
								</a>
							</li>
						</ul>

						<p className='mb-2'>Urządzenia mobilne:</p>
						<ul className='list-disc pl-6'>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Android
								</a>
							</li>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Safari (iOS)
								</a>
							</li>
							<li>
								<a href='#' className='text-brownMain hover:underline'>
									Windows Phone
								</a>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Privacy
