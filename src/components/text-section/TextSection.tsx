import './TextSection.css';

export function TextSection() {
	const textblocks = [
		{
			detailText: 'Broad experience across multiple mobile and web frontend technologies',
			tagline: "And I'm ready to build."
		}
	];

	return (
		<section
			className="mzp-l-content mzp-t-content-lg"
			style={{ marginTop: '4rem', marginBottom: '4rem' }}
		>
			<h2 className="mzp-u-title-md" style={{ textAlign: 'center' }}>
				Hi, I'm Brian
			</h2>
			{textblocks.map((section, index) => (
				<div key={index} className="textsection-card">
					<div className="textsection-detailtext">
						<p>{section.detailText}</p>
					</div>
					<div className="textsection-tagline">
						{section.tagline ? section.tagline : ''}
					</div>
				</div>
			))}
		</section>
	);
}
