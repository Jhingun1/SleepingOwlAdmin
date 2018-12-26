<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
		@foreach ($tabs as $tab)
			{!! $tab->render() !!}
		@endforeach
  </div>
</nav>

<div class="tab-content" id="nav-tabContent">
	@foreach ($tabs as $tab)
	  <div class="tab-pane fade {!! ($tab->isActive()) ? 'show active' : '' !!}" id="nav-{{ $tab->getName() }}" role="tabpanel" aria-labelledby="nav-{{ $tab->getName() }}">
			{!! $tab->addTabElement()->getContent()->render() !!}
		</div>
	@endforeach
</div>
