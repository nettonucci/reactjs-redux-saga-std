import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BannersAction from '../store/actions/banners';

const Banners = ({ banners, getBanners }) => {
	useEffect(() => {
		getBanners();
	}, []);

	return (
		<div>
			<h2>Banners</h2>
			{banners.loading && <p>Carregando...</p>}
			{banners.data.map(banner => (
				<>
					<p>{banner.id}</p>
					<p>{banner.nome_promocao}</p>
				</>
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	banners: state.banners,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(BannersAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Banners);
