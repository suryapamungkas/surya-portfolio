import { useRef } from "react";
import { X, Maximize, ExternalLink, Award } from "lucide-react";

const Certificate = ({ ImgSertif, Name, Issuer, Date, CredentialID, CredentialURL }) => {
	const dialogRef = useRef(null);

	const handleOpen = () => {
		dialogRef.current?.showModal();
	};

	const handleClose = () => {
		dialogRef.current?.close();
	};

	const certTitle = Name || "Certificate Preview";
	const credentialLink = CredentialURL || (Issuer === 'Dicoding Indonesia' && CredentialID ? `https://www.dicoding.com/certificates/${CredentialID}` : null);

	if (!ImgSertif && Name) {
		return (
			<div className="w-full relative group h-full">
				<div className="relative z-10 bg-white/5 border-white/10 shadow-sm hover:shadow-2xl backdrop-blur-lg rounded-2xl p-6 border overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col">
					<div className="absolute -z-10 inset-0 bg-gradient-to-br from-zinc-500 to-zinc-700 opacity-5 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true"></div>
					<div className="flex items-start gap-4 mb-4">
						<div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 shrink-0">
							<Award className="w-6 h-6 text-zinc-300" aria-hidden="true" />
						</div>
						<div>
							<h3 className="text-lg font-semibold text-zinc-100 leading-tight">{Name}</h3>
							<p className="text-sm text-zinc-400 mt-1">{Issuer}</p>
						</div>
					</div>
					<div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10">
						<div className="text-xs text-zinc-500">
							<p>Issued: {Date}</p>
							{CredentialID && (
								<p className="truncate max-w-[150px] sm:max-w-[180px]" title={CredentialID}>
									ID: {CredentialID}
								</p>
							)}
						</div>
						{credentialLink && (
							<a 
								href={credentialLink}
								target="_blank" 
								rel="noopener noreferrer"
								aria-label={`Verify ${Name} certificate issued by ${Issuer}`}
								className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 shrink-0 ml-2"
							>
								<ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" aria-hidden="true" />
							</a>
						)}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full h-full">
			<button
				type="button"
				aria-haspopup="dialog"
				aria-label={`View certificate image for ${certTitle}`}
				onClick={handleOpen}
				className="w-full text-left relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
			>
				<div className="relative before:absolute before:inset-0 before:bg-black/10 before:z-10">
					<img
						src={ImgSertif}
						alt={certTitle}
						loading="lazy"
						decoding="async"
						className="w-full h-auto block object-cover contrast-125 brightness-90 saturate-110 transition-all duration-300 group-hover:contrast-110 group-hover:brightness-100 group-hover:saturate-125 aspect-[16/11.5]"
					/>
				</div>

				<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20 flex items-center justify-center">
					<div className="text-center text-white transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
						<Maximize className="w-10 h-10 mx-auto mb-2 drop-shadow-md" aria-hidden="true" />
						<span className="text-lg font-semibold drop-shadow-md block">
							View Certificate
						</span>
					</div>
				</div>
			</button>

			<dialog
				ref={dialogRef}
				aria-label={certTitle}
				onClick={(e) => {
					if (e.target === dialogRef.current) handleClose();
				}}
				className="backdrop:bg-black/90 backdrop:backdrop-blur-sm bg-transparent p-4 max-w-[95vw] max-h-[95vh] rounded-xl outline-none open:flex open:items-center open:justify-center"
			>
				<div className="relative max-w-[90vw] max-h-[90vh]">
					<button
						type="button"
						onClick={handleClose}
						aria-label="Close certificate preview"
						className="absolute top-2 right-2 md:-top-4 md:-right-4 text-white bg-black/70 p-2 rounded-full hover:bg-black hover:scale-110 transition-all z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
					>
						<X className="w-6 h-6" aria-hidden="true" />
					</button>
					<img
						src={ImgSertif}
						alt={`Full view of ${certTitle}`}
						className="block max-w-full max-h-[85vh] mx-auto object-contain rounded-md"
					/>
				</div>
			</dialog>
		</div>
	);
};

export default Certificate;
